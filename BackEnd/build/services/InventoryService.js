"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const CategoryModel_1 = __importDefault(require("../database/models/CategoryModel"));
const InventoryModel_1 = __importDefault(require("../database/models/InventoryModel"));
const ProductModel_1 = __importDefault(require("../database/models/ProductModel"));
const SizeModel_1 = __importDefault(require("../database/models/SizeModel"));
class InventoryService {
    constructor() {
        this.find = async (inStock = true) => {
            const confRequest = inStock ? { [sequelize_1.Op.gt]: 0 } : 0;
            const result = await InventoryModel_1.default.findAll({
                where: { quantity: confRequest },
                attributes: { exclude: ['productId', 'sizeId'] },
                include: [{
                        model: ProductModel_1.default,
                        as: 'product',
                        include: [{
                                attributes: { exclude: ['id'] },
                                model: CategoryModel_1.default,
                                as: 'category'
                            }],
                        attributes: {
                            exclude: ['updatedAt', 'createdAt', 'categoryId', 'id']
                        }
                    },
                    {
                        attributes: { exclude: ['id'] },
                        model: SizeModel_1.default,
                        as: 'size',
                    }
                ]
            });
            return result;
        };
    }
}
exports.default = InventoryService;
