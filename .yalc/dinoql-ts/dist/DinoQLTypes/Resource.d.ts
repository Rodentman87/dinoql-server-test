import { DinoQLAction } from "./Action.js";
import { BaseDinoQLObject } from "./Base.js";
import { DinoQLDocument } from "./Document.js";
import { DinoQLProperty } from "./Property.js";
import { DinoQLQuery } from "./Query.js";
export declare class DinoQLResource extends BaseDinoQLObject {
    name: string;
    isStatic: boolean;
    docComment: string | null;
    document: DinoQLDocument;
    idProperties: DinoQLProperty[];
    properties: Map<string, DinoQLProperty>;
    queries: Map<string, DinoQLQuery>;
    actions: Map<string, DinoQLAction>;
    constructor(name: string, isStatic: boolean, properties: DinoQLProperty[], queries: DinoQLQuery[], actions: DinoQLAction[], docComment: string | null, document: DinoQLDocument);
    type: "resource";
    validateSchema(): void;
    checkValue(value: any): boolean;
    getMethod(name: string): DinoQLAction | DinoQLQuery | undefined;
}
