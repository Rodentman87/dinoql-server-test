"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DinoQLEnum = void 0;
const Base_1 = require("./Base");
class DinoQLEnum extends Base_1.BaseDinoQLObject {
    constructor(name, values, docComment, document) {
        super();
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
exports.DinoQLEnum = DinoQLEnum;
//# sourceMappingURL=Enum.js.map