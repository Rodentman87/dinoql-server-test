"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DinoQLQuery = void 0;
const Base_js_1 = require("./Base.js");
class DinoQLQuery extends Base_js_1.BaseDinoQLObject {
    constructor(name, isStatic, parameters, returnType, docComment, document) {
        super();
        this.name = name;
        this.isStatic = isStatic;
        this.parameters = parameters;
        this.returnType = returnType;
        this.docComment = docComment;
        this.document = document;
    }
    validateSchema() {
        for (const parameter of this.parameters) {
            parameter.validateSchema();
        }
        this.returnType.validateSchema();
    }
    validateParameters(parameters) {
        const errors = {};
        const valid = this.parameters.every((p) => {
            const value = parameters[p.name];
            if (value === undefined && !p.isOptional)
                errors[p.name] = `Parameter ${p.name} is required`;
            else if (value === undefined)
                return true;
            const valid = p.type.checkValue(value);
            if (valid !== true) {
                errors[p.name] = valid;
                return false;
            }
            return valid;
        });
        if (!valid)
            return errors;
        return valid;
    }
}
exports.DinoQLQuery = DinoQLQuery;
//# sourceMappingURL=Query.js.map