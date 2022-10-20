"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductModel_1 = __importDefault(require("../database/models/ProductModel"));
const CategoryModel_1 = __importDefault(require("../database/models/CategoryModel"));
class ProductService {
    constructor() {
        this.findAll = async () => {
            const foundProducts = await ProductModel_1.default.findAll({
                attributes: { exclude: ['categoryId'] },
                include: {
                    model: CategoryModel_1.default,
                    as: 'category',
                    attributes: ['name']
                },
            });
            return foundProducts;
        };
        this.create = async (newProduct) => {
            const result = await ProductModel_1.default.create({ ...newProduct });
            return result;
        };
    }
}
exports.default = ProductService;
