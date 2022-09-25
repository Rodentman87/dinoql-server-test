export class DinoQLInterface {
    constructor(name, properties, docComment, document) {
        this.name = name;
        this.docComment = docComment;
        this.document = document;
        this.properties = new Map();
        this.type = "interface";
        properties.forEach((p) => this.properties.set(p.name, p));
    }
    validateSchema() {
        for (const [_name, prop] of this.properties) {
            prop.validateSchema();
        }
    }
    checkValue(value) {
        const errors = {};
        if (typeof value !== "object")
            return "Value must be an object";
        for (const [key, prop] of this.properties) {
            if (prop.isOptional && !value.hasOwnProperty(key))
                continue;
            const valid = prop.type.checkValue(value[key]);
            if (valid !== true)
                errors[key] = valid;
        }
        if (Object.keys(errors).length > 0)
            return errors;
        return true;
    }
}
//# sourceMappingURL=Interface.js.map