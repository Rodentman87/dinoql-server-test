export declare class RequestError extends Error {
    statusCode: number;
    messages: string | string[] | Record<string, any>;
    constructor(statusCode: number, messages: string | string[] | Record<string, any>);
}
