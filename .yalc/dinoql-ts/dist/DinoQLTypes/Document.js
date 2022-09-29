"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DinoQLDocument = void 0;
const Scalar_js_1 = require("./Scalar.js");
class DinoQLDocument {
    constructor(definitions) {
        this.definitions = new Map();
        this.hasBeenValidated = false;
        definitions.forEach((d) => this.addDefinition(d));
    }
    validateSchema() {
        if (this.hasBeenValidated)
            return;
        for (const [_name, definition] of this.definitions) {
            definition.validateSchema();
        }
        this.hasBeenValidated = true;
    }
    addDefinition(definition) {
        if (this.definitions.has(definition.name)) {
            throw new Error(`Duplicate definition for ${definition.name}`);
        }
        this.hasBeenValidated = false;
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
        if (!scalar || !(scalar instanceof Scalar_js_1.DinoQLScalar))
            throw new Error(`Scalar ${name} not found`);
        scalar.checkValue = validator;
    }
}
exports.DinoQLDocument = DinoQLDocument;
//# sourceMappingURL=Document.js.map