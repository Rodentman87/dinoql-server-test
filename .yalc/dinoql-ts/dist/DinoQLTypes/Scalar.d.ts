import { BaseDinoQLObject } from "./Base";
import { DinoQLDocument } from "./Document";
export declare const BuiltInScalars: string[];
export declare class DinoQLScalar extends BaseDinoQLObject {
    name: string;
    fallbackType: string;
    docComment: string | null;
    document: DinoQLDocument;
    constructor(name: string, fallbackType: string, docComment: string | null, document: DinoQLDocument);
    get fallbackTypeDef(): import("./Document").DinoQLDefinition | undefined;
    type: "scalar";
    validateSchema(): void;
    checkValue(value: any): boolean | string | Record<string, any>;
}
