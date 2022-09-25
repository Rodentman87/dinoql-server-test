export class RequestError extends Error {
    constructor(statusCode, messages) {
        super();
        this.statusCode = statusCode;
        this.messages = messages;
    }
}
//# sourceMappingURL=Errors.js.map