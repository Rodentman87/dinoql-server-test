"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DinoQLType = void 0;
const Base_js_1 = require("./Base.js");
const Scalar_js_1 = require("./Scalar.js");
class DinoQLType extends Base_js_1.BaseDinoQLObject {
    constructor(baseTypeId, nullable, array, document) {
        super();
        this.baseTypeId = baseTypeId;
        this.nullable = nullable;
        this.array = array;
        this.document = document;
    }
    get baseTypeDef() {
        return this.document.getTypeDefinition(this.baseTypeId);
    }
    validateSchema() {
        if (Scalar_js_1.BuiltInScalars.includes(this.baseTypeId))
            return;
        if (!this.baseTypeDef)
            throw new Error(`Type ${this.baseTypeId} not found`);
    }
    checkValue(value) {
        if (this.nullable && value === null)
            return true;
        if (value === null)
            return "Value must not be null";
        if (this.array && !Array.isArray(value))
            return "Value must be an array";
        if (this.array) {
            const errors = {};
            value.forEach((v, index) => {
                const valid = this.checkBaseType(v);
                if (valid !== true)
                    errors[index.toString()] = valid;
            });
            if (Object.keys(errors).length > 0)
                return errors;
            return true;
        }
        return this.checkBaseType(value);
    }
    checkBaseType(value) {
        if (this.baseTypeId === "string") {
            if (typeof value === "string")
                return true;
            return "Value must be a string";
        }
        if (this.baseTypeId === "boolean") {
            if (typeof value === "boolean")
                return true;
            return "Value must be a boolean";
        }
        if (this.baseTypeId === "integer") {
            if (typeof value === "number" && Number.isInteger(value))
                return true;
            return "Value must be an integer";
        }
        if (this.baseTypeId === "float") {
            if (typeof value === "number")
                return true;
            return "Value must be a float";
        }
        const typeDef = this.baseTypeDef;
        if (!typeDef)
            throw new Error(`Type ${this.baseTypeId} not found`);
        return typeDef.checkValue(value);
    }
    toString() {
        if (this.array)
            return `[${this.baseTypeId}${this.nullable ? "?" : ""}]`;
        return `${this.baseTypeId}${this.nullable ? "?" : ""}`;
    }
}
exports.DinoQLType = DinoQLType;
//# sourceMappingURL=Type.js.map