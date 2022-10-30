"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JoiSchemas_1 = require("../validations/JoiSchemas");
const ThrowError_1 = __importDefault(require("../utils/ThrowError"));
const find = (req, _res, next) => {
    const { error } = JoiSchemas_1.inventoryShemas.inStockSchema.validate(req.body);
    if (error)
        (0, ThrowError_1.default)(error);
    next();
};
exports.default = {
    find,
};
//# sourceMappingURL=inventoryValidation.js.map