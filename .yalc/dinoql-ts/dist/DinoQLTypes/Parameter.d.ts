import { BaseDinoQLObject } from "./Base.js";
import { DinoQLDocument } from "./Document.js";
import { DinoQLType } from "./Type.js";
export declare class DinoQLParameter extends BaseDinoQLObject {
    name: string;
    type: DinoQLType;
    isOptional: boolean;
    docComment: string | null;
    document: DinoQLDocument;
    constructor(name: string, type: DinoQLType, isOptional: boolean, docComment: string | null, document: DinoQLDocument);
    validateSchema(): void;
}
