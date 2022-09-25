import { DinoQLParameter } from "./Parameter.js";
import { DinoQLType } from "./Type.js";
export class DinoQLQuery {
    constructor(name, isStatic, parameters, returnType, docComment, document) {
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
    static fromAntlr(ctx, document) {
        const name = ctx.ID().symbol.text;
        const isStatic = ctx.STATIC() !== null;
        const parameters = ctx
            .parameterListDefinition()
            .parameterDefinition()
            .map((p) => DinoQLParameter.fromAntlr(p, document));
        const returnType = DinoQLType.fromAntlr(ctx.value(), document);
        const docComment = ctx.DOC_COMMENT() !== null
            ? ctx.DOC_COMMENT().symbol.text.slice(2, -2).trim()
            : null;
        return new DinoQLQuery(name, isStatic, parameters, returnType, docComment, document);
    }
}
//# sourceMappingURL=Query.js.map