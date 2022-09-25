import { DinoQLEnum } from "./Enum.js";
import { DinoQLInterface } from "./Interface.js";
import { DinoQLResource } from "./Resource.js";
import { DinoQLScalar } from "./Scalar.js";
declare type DinoQLDefinition = DinoQLScalar | DinoQLEnum | DinoQLInterface | DinoQLResource;
export declare class DinoQLDocument {
    definitions: Map<string, DinoQLDefinition>;
    constructor(definitions: DinoQLDefinition[]);
    validateSchema(): void;
    addDefinition(definition: DinoQLDefinition): void;
    getTypeDefinition(name: string): DinoQLDefinition | undefined;
    getDefinitions(type: "interface"): DinoQLInterface[];
    getDefinitions(type: "scalar"): DinoQLScalar[];
    getDefinitions(type: "enum"): DinoQLEnum[];
    getDefinitions(type: "resource"): DinoQLResource[];
    provideCustomScalarValidator(name: string, validator: (value: any) => boolean): void;
}
export {};
