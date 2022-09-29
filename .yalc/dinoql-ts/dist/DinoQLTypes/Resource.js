"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DinoQLResource = void 0;
const Base_js_1 = require("./Base.js");
const Parameter_js_1 = require("./Parameter.js");
const Query_js_1 = require("./Query.js");
const Type_js_1 = require("./Type.js");
class DinoQLResource extends Base_js_1.BaseDinoQLObject {
    constructor(name, isStatic, properties, queries, actions, docComment, document) {
        super();
        this.name = name;
        this.isStatic = isStatic;
        this.docComment = docComment;
        this.document = document;
        this.properties = new Map();
        this.queries = new Map();
        this.actions = new Map();
        this.type = "resource";
        properties.forEach((p) => this.properties.set(p.name, p));
        queries.forEach((q) => this.queries.set(q.name, q));
        actions.forEach((a) => this.actions.set(a.name, a));
        const idProps = properties.filter((p) => p.isId);
        this.idProperties = idProps;
        const returnType = new Type_js_1.DinoQLType(this.name, false, false, this.document);
        let parameters = [];
        if (!this.isStatic) {
            parameters = this.idProperties.map((p) => {
                return new Parameter_js_1.DinoQLParameter(p.name, p.type, false, null, this.document);
            });
        }
        const query = new Query_js_1.DinoQLQuery("get", true, parameters, returnType, null, this.document);
        this.queries.set("get", query);
    }
    validateSchema() {
        if (this.idProperties.length < 1 && !this.isStatic)
            throw new Error(`Instanced resource ${this.name} has no id properties`);
        for (const [_name, property] of this.properties) {
            property.validateSchema();
        }
        for (const [_name, query] of this.queries) {
            query.validateSchema();
        }
        for (const [_name, action] of this.actions) {
            action.validateSchema();
        }
    }
    checkValue(value) {
        if (typeof value !== "object")
            return false;
        for (const [key, prop] of this.properties) {
            if (!prop.type.checkValue(value[key]))
                return false;
        }
        return true;
    }
    getMethod(name) {
        return this.actions.get(name) || this.queries.get(name);
    }
}
exports.DinoQLResource = DinoQLResource;
//# sourceMappingURL=Resource.js.map