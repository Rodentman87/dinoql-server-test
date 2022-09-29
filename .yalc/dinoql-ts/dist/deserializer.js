"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeserializationError = exports.Serializer = void 0;
const defaultScalarHandlers = [
    {
        name: "string",
        serialize: (value) => {
            if (typeof value !== "string")
                throw new Error(`Error serializing value. ${value} is not a string`);
            return value;
        },
        deserialize: (value) => {
            if (typeof value !== "string")
                throw new Error(`Expected string, but got ${value}`);
            return value;
        },
    },
    {
        name: "boolean",
        serialize: (value) => {
            if (typeof value !== "boolean")
                throw new Error(`Error serializing value. ${value} is not a boolean`);
            return value;
        },
        deserialize: (value) => {
            if (typeof value !== "boolean")
                throw new Error(`Expected boolean, but got ${value}`);
            return value;
        },
    },
    {
        name: "integer",
        serialize: (value) => {
            if (typeof value !== "number" || !Number.isInteger(value))
                throw new Error(`Error serializing value. ${value} is not an integer`);
            return value;
        },
        deserialize: (value) => {
            if (typeof value !== "number" || !Number.isInteger(value))
                throw new Error(`Expected integer, but got ${value}`);
            return value;
        },
    },
    {
        name: "float",
        serialize: (value) => {
            if (typeof value !== "number")
                throw new Error(`Error serializing value. ${value} is not a float`);
            return value;
        },
        deserialize: (value) => {
            if (typeof value !== "number")
                throw new Error(`Expected float, but got ${value}`);
            return value;
        },
    },
];
class Serializer {
    constructor(document, options) {
        this.document = document;
        this.scalarHandlerMap = new Map();
        this.serverMode = false;
        document.validateSchema();
        if ((options === null || options === void 0 ? void 0 : options.serverMode) !== undefined)
            this.serverMode = options.serverMode;
        defaultScalarHandlers.forEach(this.registerScalarHandler.bind(this));
    }
    registerScalarHandler(handler) {
        if (this.scalarHandlerMap.has(handler.name))
            throw new Error(`Scalar handler for ${handler.name} already registered`);
        this.scalarHandlerMap.set(handler.name, handler);
    }
    deserializeParameters(object, method) {
        return this.deserializeObject("params", object, method.parameters);
    }
    deserializeObject(name, object, props) {
        let deserialized = {};
        let errors = [];
        for (const prop of props) {
            const value = object[prop.name];
            if (value === undefined) {
                if (!prop.isOptional) {
                    errors.push(new DeserializationError(prop.name, `Missing required property ${prop.name}`));
                }
                continue;
            }
            const type = prop.type;
            if (type.array) {
                if (!Array.isArray(value)) {
                    errors.push(new DeserializationError(prop.name, `Expected array, got ${typeof value}`));
                    continue;
                }
                const out = [];
                let index = -1;
                const valErrors = [];
                for (const val of value) {
                    index++;
                    try {
                        out.push(this.deserializeSingleValue(index.toString(), type, val));
                    }
                    catch (e) {
                        if (e instanceof DeserializationError)
                            valErrors.push(e);
                        else
                            throw e;
                    }
                }
                if (valErrors.length > 0) {
                    errors.push(...valErrors);
                    continue;
                }
                deserialized[prop.name] = out;
            }
            else {
                if (Array.isArray(value)) {
                    errors.push(new DeserializationError(prop.name, `Expected ${type.baseTypeId}, got array`));
                    continue;
                }
                try {
                    const result = this.deserializeSingleValue(prop.name, type, value);
                    deserialized[prop.name] = result;
                }
                catch (e) {
                    if (e instanceof DeserializationError)
                        errors.push(e);
                    else
                        throw e;
                }
            }
        }
        if (errors.length > 0)
            throw new DeserializationError(name, errors);
        return deserialized;
    }
    deserializeSingleValue(name, type, value) {
        const typeDef = type.baseTypeDef;
        let kind;
        if (typeDef === undefined)
            kind = "scalar";
        else
            kind = typeDef.type;
        switch (kind) {
            case "scalar":
                try {
                    return this.deserializeScalar(type.baseTypeId, value);
                }
                catch (e) {
                    if (e instanceof Error)
                        throw new DeserializationError(name, e.message);
                    else
                        throw e;
                }
            case "enum":
                try {
                    if (typeDef.values.includes(value))
                        return value;
                    else
                        throw new Error(`Invalid enum value ${value}, expected one of ${typeDef.values.join(", ")}`);
                }
                catch (e) {
                    if (e instanceof Error)
                        throw new DeserializationError(name, e.message);
                    else
                        throw e;
                }
            case "interface":
                return this.deserializeObject(name, value, [
                    ...typeDef.properties.values(),
                ]);
            case "resource":
                if (this.serverMode) {
                    return this.deserializeObject(name, value, [
                        ...typeDef.idProperties.values(),
                    ]);
                }
                return this.deserializeObject(name, value, [
                    ...typeDef.properties.values(),
                ]);
        }
    }
    deserializeScalar(name, value) {
        const scalarHandler = this.scalarHandlerMap.get(name);
        if (!scalarHandler)
            throw new Error(`No scalar handler for ${name}`);
        return scalarHandler.deserialize(value);
    }
}
exports.Serializer = Serializer;
class DeserializationError {
    constructor(property, message) {
        this.property = property;
        this.message = message;
    }
    toJSON() {
        if (typeof this.message === "string")
            return this.message;
        else
            return this.message.reduce((acc, err) => {
                const newAcc = Object.assign({}, acc);
                newAcc[err.property] = err.toJSON();
                return newAcc;
            }, {});
    }
}
exports.DeserializationError = DeserializationError;
//# sourceMappingURL=deserializer.js.map