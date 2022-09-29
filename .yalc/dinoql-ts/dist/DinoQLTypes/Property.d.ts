import { BaseDinoQLObject } from "./Base.js";
import { DinoQLDocument } from "./Document.js";
import { DinoQLType } from "./Type.js";
export declare class DinoQLProperty extends BaseDinoQLObject {
    name: string;
    type: DinoQLType;
    isId: boolean;
    isOptional: boolean;
    docComment: string | null;
    document: DinoQLDocument;
    constructor(name: string, type: DinoQLType, isId: boolean, isOptional: boolean, docComment: string | null, document: DinoQLDocument);
    validateSchema(): void;
}
