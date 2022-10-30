"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor(message, type) {
        super(message);
        this.type = type;
    }
}
exports.default = CustomError;
//# sourceMappingURL=CustomError.js.map