import { DinoQLType } from "./Type.js";
export class DinoQLProperty {
    constructor(name, type, isId, isOptional, docComment, document) {
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
    static fromAntlr(ctx, document) {
        const name = ctx.ID().symbol.text;
        const optional = ctx.OPTIONAL() !== null;
        const isId = ctx.IDENTIFIER() !== null;
        const type = DinoQLType.fromAntlr(ctx.value(), document);
        const docComment = ctx.DOC_COMMENT() !== null
            ? ctx.DOC_COMMENT().symbol.text.slice(2, -2).trim()
            : null;
        return new DinoQLProperty(name, type, isId, optional, docComment, document);
    }
}
//# sourceMappingURL=Property.js.map