import { BaseDinoQLObject } from "./Base.js";
import { DinoQLDocument } from "./Document.js";
export declare class DinoQLType extends BaseDinoQLObject {
    baseTypeId: string;
    nullable: boolean;
    array: boolean;
    document: DinoQLDocument;
    constructor(baseTypeId: string, nullable: boolean, array: boolean, document: DinoQLDocument);
    get baseTypeDef(): import("./Document.js").DinoQLDefinition | undefined;
    validateSchema(): void;
    checkValue(value: any): boolean | string | Record<string, any>;
    private checkBaseType;
    toString(): string;
}
