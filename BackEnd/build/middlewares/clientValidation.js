"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JoiSchemas_1 = require("../validations/JoiSchemas");
const ThrowError_1 = __importDefault(require("../utils/ThrowError"));
const create = (req, _res, next) => {
    const { error } = JoiSchemas_1.clientSchemas.create.validate(req.body);
    if (error)
        (0, ThrowError_1.default)(error);
    next();
};
const find = (req, _res, next) => {
    const { error } = JoiSchemas_1.clientSchemas.find.validate(req.body);
    if (error)
        (0, ThrowError_1.default)(error);
    next();
};
exports.default = {
    create,
    find,
};
//# sourceMappingURL=clientValidation.js.map