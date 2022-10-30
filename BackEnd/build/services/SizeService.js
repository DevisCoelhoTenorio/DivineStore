"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SizeModel_1 = __importDefault(require("../database/models/SizeModel"));
class SizeService {
    constructor() {
        this.findAll = async () => {
            const result = await SizeModel_1.default.findAll();
            return result;
        };
    }
}
exports.default = SizeService;
//# sourceMappingURL=SizeService.js.map