"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DinoQLParameter = void 0;
const Base_js_1 = require("./Base.js");
class DinoQLParameter extends Base_js_1.BaseDinoQLObject {
    constructor(name, type, isOptional, docComment, document) {
        super();
        this.name = name;
        this.type = type;
        this.isOptional = isOptional;
        this.docComment = docComment;
        this.document = document;
    }
    validateSchema() {
        this.type.validateSchema();
    }
}
exports.DinoQLParameter = DinoQLParameter;
//# sourceMappingURL=Parameter.js.map