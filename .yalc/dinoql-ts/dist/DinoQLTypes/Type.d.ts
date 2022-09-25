import { DinoQLDocument } from "./Document.js";
export declare class DinoQLType {
    baseTypeId: string;
    nullable: boolean;
    array: boolean;
    document: DinoQLDocument;
    constructor(baseTypeId: string, nullable: boolean, array: boolean, document: DinoQLDocument);
    get baseTypeDef(): (import("./Enum.js").DinoQLEnum | import("./Scalar.js").DinoQLScalar | import("./Interface.js").DinoQLInterface | import("./Resource.js").DinoQLResource) | undefined;
    validateSchema(): void;
    checkValue(value: any): boolean | string | Record<string, any>;
    private checkBaseType;
    toString(): string;
    static fromAntlr(ctx: any, document: DinoQLDocument): DinoQLType;
}
