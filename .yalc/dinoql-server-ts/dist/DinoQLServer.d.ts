import { FastifyInstance } from "fastify";
import { DinoQLDocument } from "dinoql-ts";
import { ResourceHandler } from "./ResourceHandler.js";
export interface ServerOptions {
    schema: DinoQLDocument;
    endpoint?: string;
    app?: FastifyInstance;
}
export declare class DinoQLServer {
    schema: DinoQLDocument;
    app: FastifyInstance;
    private resourceHandlers;
    constructor(options: ServerOptions);
    addResourceHandler(handler: ResourceHandler): Promise<void>;
    start(port: number): Promise<string>;
    private handleServerReq;
    private validateRequest;
    private resursivelyValidateRelationsStructure;
    private handleRequest;
    private validateRelations;
    private resolveRelations;
}
