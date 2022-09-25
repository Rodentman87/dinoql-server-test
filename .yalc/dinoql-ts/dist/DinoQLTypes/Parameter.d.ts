import { DinoQLDocument } from "./Document.js";
import { DinoQLType } from "./Type.js";
export declare class DinoQLParameter {
    name: string;
    type: DinoQLType;
    isOptional: boolean;
    docComment: string | null;
    document: DinoQLDocument;
    constructor(name: string, type: DinoQLType, isOptional: boolean, docComment: string | null, document: DinoQLDocument);
    validateSchema(): void;
    static fromAntlr(ctx: any, document: DinoQLDocument): DinoQLParameter;
}
