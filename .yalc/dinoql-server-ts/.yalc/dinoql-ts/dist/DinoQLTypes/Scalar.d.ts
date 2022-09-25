import { DinoQLDocument } from "./Document";
export declare const BuiltInScalars: string[];
export declare class DinoQLScalar {
    name: string;
    fallbackType: string;
    document: DinoQLDocument;
    constructor(name: string, fallbackType: string, document: DinoQLDocument);
    get fallbackTypeDef(): (import("./Enum").DinoQLEnum | DinoQLScalar | import("./Interface").DinoQLInterface | import("./Resource").DinoQLResource) | undefined;
    type: "scalar";
    validateSchema(): void;
    checkValue(value: any): boolean | string | Record<string, any>;
}
