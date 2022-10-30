"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __importDefault(require("./CustomError"));
exports.default = (error) => {
    const { type } = error.details[0];
    throw new CustomError_1.default(error.message, type);
};
//# sourceMappingURL=ThrowError.js.map