import { DinoQLScalar } from "./Scalar.js";
export class DinoQLDocument {
    constructor(definitions) {
        this.definitions = new Map();
        definitions.forEach((d) => this.addDefinition(d));
    }
    validateSchema() {
        for (const [_name, definition] of this.definitions) {
            definition.validateSchema();
        }
    }
    addDefinition(definition) {
        if (this.definitions.has(definition.name)) {
            throw new Error(`Duplicate definition for ${definition.name}`);
        }
        this.definitions.set(definition.name, definition);
    }
    getTypeDefinition(name) {
        return this.definitions.get(name);
    }
    getDefinitions(type) {
        if (!type)
            return Array.from(this.definitions.values());
        return Array.from(this.definitions.values()).filter((val) => val.type === type);
    }
    provideCustomScalarValidator(name, validator) {
        const scalar = this.getTypeDefinition(name);
        if (!scalar || !(scalar instanceof DinoQLScalar))
            throw new Error(`Scalar ${name} not found`);
        scalar.checkValue = validator;
    }
}
//# sourceMappingURL=Document.js.map