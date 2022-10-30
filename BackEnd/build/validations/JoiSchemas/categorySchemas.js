"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const find = joi_1.default.object({
    id: joi_1.default.number(),
    name: joi_1.default.string(),
});
const create = joi_1.default.object({
    name: joi_1.default.string().required(),
});
exports.default = {
    find,
    create,
};
//# sourceMappingURL=categorySchemas.js.map