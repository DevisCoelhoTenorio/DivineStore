"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
class ErrorHandler {
    static handle(error, _req, res, next) {
        res.status(500).json({ message: error.message });
        next();
    }
}
exports.ErrorHandler = ErrorHandler;
