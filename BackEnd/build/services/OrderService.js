"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientModel_1 = __importDefault(require("../database/models/ClientModel"));
const OrderModel_1 = __importDefault(require("../database/models/OrderModel"));
const PaymentMethodModel_1 = __importDefault(require("../database/models/PaymentMethodModel"));
class OrderService {
    constructor() {
        this.findAll = async () => {
            const result = await OrderModel_1.default.findAll({
                include: [{
                        model: ClientModel_1.default,
                        as: 'client',
                        attributes: { exclude: ['updatedAt', 'createAt'] }
                    },
                    {
                        model: PaymentMethodModel_1.default,
                        as: 'paymentMethod',
                    }
                ]
            });
            return result;
        };
    }
}
exports.default = OrderService;
