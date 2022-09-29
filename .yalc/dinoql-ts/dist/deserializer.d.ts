import { DinoQLAction, DinoQLDocument, DinoQLQuery } from "./DinoQLTypes";
export interface ScalarHandler<S, D> {
    name: string;
    serialize: (value: D) => S;
    deserialize: (value: S) => D;
}
export interface SerializerOptions {
    serverMode?: boolean;
}
export declare class Serializer {
    document: DinoQLDocument;
    private scalarHandlerMap;
    private serverMode;
    constructor(document: DinoQLDocument, options?: SerializerOptions);
    registerScalarHandler<S, D>(handler: ScalarHandler<S, D>): void;
    deserializeParameters(object: Record<string, any>, method: DinoQLAction | DinoQLQuery): Record<string, any>;
    private deserializeObject;
    private deserializeSingleValue;
    deserializeScalar(name: string, value: any): any;
}
export declare class DeserializationError {
    property: string;
    message: string | DeserializationError[];
    constructor(property: string, message: string | DeserializationError[]);
    toJSON(): string | SerializedError;
}
interface SerializedError {
    [key: string]: string | SerializedError;
}
export {};
