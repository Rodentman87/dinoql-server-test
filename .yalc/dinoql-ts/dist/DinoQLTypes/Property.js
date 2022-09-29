"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DinoQLProperty = void 0;
const Base_js_1 = require("./Base.js");
class DinoQLProperty extends Base_js_1.BaseDinoQLObject {
    constructor(name, type, isId, isOptional, docComment, document) {
        super();
        this.name = name;
        this.type = type;
        this.isId = isId;
        this.isOptional = isOptional;
        this.docComment = docComment;
        this.document = document;
    }
    validateSchema() {
        this.type.validateSchema();
    }
}
exports.DinoQLProperty = DinoQLProperty;
//# sourceMappingURL=Property.js.map