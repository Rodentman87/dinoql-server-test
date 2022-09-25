import { DinoQLDocument } from "./Document.js";
import { DinoQLParameter } from "./Parameter.js";
import { DinoQLType } from "./Type.js";
export declare class DinoQLAction {
    name: string;
    isStatic: boolean;
    parameters: DinoQLParameter[];
    returnType: DinoQLType;
    docComment: string | null;
    document: DinoQLDocument;
    constructor(name: string, isStatic: boolean, parameters: DinoQLParameter[], returnType: DinoQLType, docComment: string | null, document: DinoQLDocument);
    validateSchema(): void;
    validateParameters(parameters: Record<string, any>): true | Record<string, any>;
    static fromAntlr(ctx: any, document: DinoQLDocument): DinoQLAction;
}
