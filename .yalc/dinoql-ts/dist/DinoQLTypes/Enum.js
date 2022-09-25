export class DinoQLEnum {
    constructor(name, values, docComment, document) {
        this.name = name;
        this.values = values;
        this.docComment = docComment;
        this.document = document;
        this.type = "enum";
    }
    validateSchema() {
        if (this.values.length === 0)
            throw new Error(`Enum ${this.name} has no values`);
    }
    checkValue(value) {
        if (typeof value !== "string")
            return false;
        if (this.values.includes(value))
            return true;
        return `Value must be one of ${this.values.join(", ")}`;
    }
}
//# sourceMappingURL=Enum.js.map