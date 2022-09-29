"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DinoQLScalar = exports.BuiltInScalars = void 0;
const Base_1 = require("./Base");
exports.BuiltInScalars = ["string", "boolean", "integer", "float"];
class DinoQLScalar extends Base_1.BaseDinoQLObject {
    constructor(name, fallbackType, docComment, document) {
        super();
        this.name = name;
        this.fallbackType = fallbackType;
        this.docComment = docComment;
        this.document = document;
        this.type = "scalar";
    }
    get fallbackTypeDef() {
        return this.document.getTypeDefinition(this.fallbackType);
    }
    validateSchema() {
        if (exports.BuiltInScalars.includes(this.fallbackType))
            return;
        const typeDef = this.document.getTypeDefinition(this.fallbackType);
        if (!typeDef)
            throw new Error(`Fallback type ${this.fallbackType} not found`);
    }
    checkValue(value) {
        if (this.fallbackType === "string") {
            if (typeof value === "string")
                return true;
            return "Value must be a string";
        }
        if (this.fallbackType === "boolean") {
            if (typeof value === "boolean")
                return true;
            return "Value must be a boolean";
        }
        if (this.fallbackType === "integer") {
            if (typeof value === "number" && Number.isInteger(value))
                return true;
            return "Value must be an integer";
        }
        if (this.fallbackType === "float") {
            if (typeof value === "number")
                return true;
            return "Value must be a float";
        }
        const typeDef = this.document.getTypeDefinition(this.fallbackType);
        if (!typeDef)
            throw new Error(`Fallback type ${this.fallbackType} not found`);
        return typeDef.checkValue(value);
    }
}
exports.DinoQLScalar = DinoQLScalar;
//# sourceMappingURL=Scalar.js.map