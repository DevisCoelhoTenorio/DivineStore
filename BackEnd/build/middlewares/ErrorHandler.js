"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const StatusCode_1 = __importDefault(require("../utils/StatusCode"));
class ErrorHandler {
    static handle(error, _req, res, _next) {
        console.log(error);
        if (error.type) {
            return res.status(StatusCode_1.default[error.type] || 500).json({ message: error.message });
        }
        return res.status(StatusCode_1.default['fatal.error']).json({ message: error.message });
    }
}
exports.ErrorHandler = ErrorHandler;
