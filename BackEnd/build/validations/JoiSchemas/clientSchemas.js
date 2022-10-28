"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const create = joi_1.default.object({
    email: joi_1.default.string().email(),
    name: joi_1.default.string().required(),
    phoneNumber: joi_1.default.string().min(8),
});
const find = joi_1.default.object({
    id: joi_1.default.number(),
    name: joi_1.default.string(),
    phoneNumber: joi_1.default.string(),
    email: joi_1.default.string(),
});
exports.default = {
    create,
    find,
};
