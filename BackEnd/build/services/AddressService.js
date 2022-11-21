"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AddressModel_1 = __importDefault(require("../database/models/AddressModel"));
// import CustomError from '../utils/CustomError';
class AddressService {
    constructor() {
        this.find = async (search = {}) => {
            const result = await AddressModel_1.default.findAll({
                where: search,
            });
            return result;
        };
    }
}
exports.default = AddressService;
//# sourceMappingURL=AddressService.js.map