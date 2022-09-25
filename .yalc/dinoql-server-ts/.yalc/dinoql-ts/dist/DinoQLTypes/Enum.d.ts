import { DinoQLDocument } from "./Document";
export declare class DinoQLEnum {
    name: string;
    values: string[];
    docComment: string | null;
    document: DinoQLDocument;
    constructor(name: string, values: string[], docComment: string | null, document: DinoQLDocument);
    type: "enum";
    validateSchema(): void;
    checkValue(value: any): boolean | string;
}
