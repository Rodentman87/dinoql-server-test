export declare class RequestError extends Error {
    statusCode: number;
    messages: string | string[];
    constructor(statusCode: number, messages: string | string[]);
}
