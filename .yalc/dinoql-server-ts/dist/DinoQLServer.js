import { fastify, } from "fastify";
import { RequestError } from "./Errors.js";
export class DinoQLServer {
    constructor(options) {
        var _a, _b;
        this.resourceHandlers = new Map();
        this.app = (_a = options.app) !== null && _a !== void 0 ? _a : fastify();
        options.schema.validateSchema();
        this.schema = options.schema;
        this.handleRequest = this.handleRequest.bind(this);
        this.handleServerReq = this.handleServerReq.bind(this);
        this.resolveRelations = this.resolveRelations.bind(this);
        this.app.post((_b = options.endpoint) !== null && _b !== void 0 ? _b : "/dinoql", this.handleServerReq);
    }
    async addResourceHandler(handler) {
        const resource = this.schema.getTypeDefinition(handler.resourceName);
        if (!resource || resource.type !== "resource") {
            throw new Error(`Resource ${handler.resourceName} not found`);
        }
        for (const [name] of resource.queries) {
            if (!(name in handler) ||
                typeof handler[name] !== "function") {
                throw new Error(`Query handler ${name} not found in handler ${handler.resourceName}`);
            }
        }
        for (const [name] of resource.actions) {
            if (!(name in handler) ||
                typeof handler[name] !== "function") {
                throw new Error(`Action handler ${name} not found in handler ${handler.resourceName}`);
            }
        }
        this.resourceHandlers.set(handler.resourceName, handler);
    }
    start(port) {
        return this.app.listen({ port });
    }
    async handleServerReq(req, res) {
        const body = req.body;
        if (Array.isArray(body)) {
            const ids = new Set();
            body.forEach((req) => {
                if (!req.batchId) {
                    res.status(400).send({
                        error: "Batch requests must have a batchId",
                    });
                    return;
                }
                else {
                    if (ids.has(req.batchId)) {
                        res.status(400).send({
                            error: "All batchIds must be unique",
                        });
                        return;
                    }
                    ids.add(req.batchId);
                }
            });
            const outputs = {};
            let allErrors = true;
            for (const request of body) {
                try {
                    outputs[request.batchId] = await this.handleRequest(request);
                    allErrors = false;
                }
                catch (e) {
                    outputs[request.batchId] = {
                        _error: e.message,
                    };
                }
            }
            res.status(allErrors ? 400 : 200).send(outputs);
        }
        else {
            const valid = this.validateRequest(body);
            if (!valid) {
                res.status(400).send({
                    _error: "Invalid request",
                });
                return;
            }
            try {
                const out = await this.handleRequest(body);
                res.status(200).send(out);
            }
            catch (e) {
                if (e instanceof RequestError) {
                    res.status(e.statusCode).send({
                        _error: e.messages,
                    });
                    return;
                }
                else {
                    throw e;
                }
            }
        }
    }
    validateRequest(body) {
        if (!body.resource || typeof body.resource !== "string")
            return false;
        if (!body.method || typeof body.method !== "string")
            return false;
        if (!body.params || typeof body.params !== "object")
            return false;
        if (body.relations !== undefined && typeof body.relations !== "object")
            return false;
        if (body.relations !== undefined) {
            return this.resursivelyValidateRelationsStructure(body.relations);
        }
        return true;
    }
    resursivelyValidateRelationsStructure(object) {
        for (const key in object) {
            switch (typeof object[key]) {
                case "boolean":
                    if (object[key] !== true)
                        return false;
                    break;
                case "object":
                    if (!this.resursivelyValidateRelationsStructure(object[key]))
                        return false;
                    break;
                default:
                    return false;
            }
        }
        return true;
    }
    async handleRequest(request) {
        const resource = this.schema.getTypeDefinition(request.resource);
        if (!resource || resource.type !== "resource") {
            return {
                errors: ["Resource not found"],
            };
        }
        const method = resource.getMethod(request.method);
        if (!method) {
            throw new RequestError(400, "Method not found");
        }
        const params = method.validateParameters(request.params);
        if (params !== true) {
            throw new RequestError(400, Object.keys(params).map((key) => params[key]));
        }
        if (request.relations) {
            const valid = this.validateRelations(resource, request.relations);
            if (valid !== true) {
                throw new RequestError(400, valid);
            }
        }
        const handler = this.resourceHandlers.get(request.resource);
        if (!handler)
            throw new Error(`Resource handler not found for ${request.resource}`);
        let result;
        if (!request.id || request.id === "static") {
            result = handler[request.method](request.params);
        }
        else {
            result = handler[request.method](request.id, request.params);
        }
        const resolvedResult = await result;
        let final = resolvedResult;
        if (request.relations) {
            final = await this.resolveRelations(resolvedResult, resource, request.relations);
        }
        return final;
    }
    validateRelations(resource, relation, parentPath = "") {
        for (const key in relation) {
            const field = resource.properties.get(key);
            if (!field)
                return `Invalid relation, field ${parentPath}${key} not found`;
            if (field.type.baseTypeDef === undefined)
                return `Invalid relation, field ${parentPath}${key} is not a resource`;
            if (field.type.baseTypeDef.type !== "resource")
                return `Invalid relation, field ${parentPath}${key} is not a resource`;
            if (typeof relation[key] === "object") {
                return this.validateRelations(field.type.baseTypeDef, relation[key], parentPath + key + ".");
            }
        }
        return true;
    }
    async resolveRelations(object, type, relations) {
        const out = Object.assign({}, object);
        for (const key in relations) {
            const relationField = type.properties.get(key);
            const relationType = relationField.type.baseTypeDef;
            if (relationField.isOptional && out[key] === undefined)
                continue;
            if (relationField.type.nullable && out[key] === null) {
                out[key] = null;
            }
            else if (relationField.type.array) {
                const resolver = this.resourceHandlers.get(relationType.name);
                let finalArray = out[key].map(async (idObj) => {
                    const result = resolver.get(idObj);
                    const resolvedResult = await result;
                    if (typeof relations[key] === "object") {
                        return this.resolveRelations(resolvedResult, relationType, relations[key]);
                    }
                    else {
                        return resolvedResult;
                    }
                });
                out[key] = await Promise.all(finalArray);
            }
            else {
                const resolver = this.resourceHandlers.get(relationType.name);
                const result = resolver.get(out[topLevelRelation]);
                const resolvedResult = await result;
                if (typeof relations[key] === "object") {
                    out[key] = this.resolveRelations(resolvedResult, relationType, relations[key]);
                }
                else {
                    out[key] = resolvedResult;
                }
            }
        }
        return out;
    }
}
//# sourceMappingURL=DinoQLServer.js.map