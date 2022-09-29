import { DinoQLDocument } from "./DinoQLTypes";
import { IParseOptions } from "./parser";
export declare const parse: (input: string, options?: IParseOptions) => DinoQLDocument;
export { DeserializationError, Serializer, ScalarHandler, SerializerOptions, } from "./deserializer";
export * from "./DinoQLTypes";
