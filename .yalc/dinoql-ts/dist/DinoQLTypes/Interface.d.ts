import { BaseDinoQLObject } from "./Base.js";
import { DinoQLDocument } from "./Document.js";
import { DinoQLProperty } from "./Property.js";
export declare class DinoQLInterface extends BaseDinoQLObject {
    name: string;
    docComment: string | null;
    document: DinoQLDocument;
    properties: Map<string, DinoQLProperty>;
    constructor(name: string, properties: DinoQLProperty[], docComment: string | null, document: DinoQLDocument);
    type: "interface";
    validateSchema(): void;
    checkValue(value: any): boolean | string | Record<string, any>;
}
