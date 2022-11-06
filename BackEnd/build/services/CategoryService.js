"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryModel_1 = __importDefault(require("../database/models/CategoryModel"));
const CustomError_1 = __importDefault(require("../utils/CustomError"));
class CategoryService {
    constructor() {
        this.find = async (search = {}) => {
            const result = await CategoryModel_1.default.findAll({
                where: search,
            });
            return result;
        };
        this.create = async ({ name }) => {
            const checkName = await this.find({ name });
            if (checkName.length > 1) {
                throw new CustomError_1.default('This category already exists', 'category.exists');
            }
            const result = await CategoryModel_1.default.create({ name });
            return result;
        };
        this.delete = async (id) => {
            await CategoryModel_1.default.destroy({
                where: { id },
            });
        };
    }
}
exports.default = CategoryService;
//# sourceMappingURL=CategoryService.js.map