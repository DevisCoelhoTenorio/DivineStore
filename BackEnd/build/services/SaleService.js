"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderModel_1 = __importDefault(require("../database/models/OrderModel"));
const ProductModel_1 = __importDefault(require("../database/models/ProductModel"));
const SaleModel_1 = __importDefault(require("../database/models/SaleModel"));
class SaleService {
    constructor() {
        this.findAll = async () => {
            const result = await SaleModel_1.default.findAll({
                include: [{
                        model: OrderModel_1.default,
                        as: 'order',
                        attributes: { exclude: ['updatedAt', 'createAt'] },
                    },
                    {
                        model: ProductModel_1.default,
                        as: 'products',
                        attributes: { exclude: ['updatedAt', 'createAt'] },
                    },
                ],
            });
            return result;
        };
    }
}
exports.default = SaleService;
//# sourceMappingURL=SaleService.js.map