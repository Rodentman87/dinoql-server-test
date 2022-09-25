export const BuiltInScalars = ["string", "boolean", "integer", "float"];
export class DinoQLScalar {
    constructor(name, fallbackType, document) {
        this.name = name;
        this.fallbackType = fallbackType;
        this.document = document;
        this.type = "scalar";
    }
    get fallbackTypeDef() {
        return this.document.getTypeDefinition(this.fallbackType);
    }
    validateSchema() {
        if (BuiltInScalars.includes(this.fallbackType))
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
//# sourceMappingURL=Scalar.js.map