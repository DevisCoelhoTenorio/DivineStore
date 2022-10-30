"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PaymentMethodModel_1 = __importDefault(require("../database/models/PaymentMethodModel"));
class PaymentMethodService {
    constructor() {
        this.findAll = async () => {
            const result = await PaymentMethodModel_1.default.findAll();
            return result;
        };
        this.create = async (method) => {
            const result = await PaymentMethodModel_1.default.create({ method });
            return result;
        };
        this.delete = async (id) => {
            await PaymentMethodModel_1.default.destroy({
                where: { id },
            });
        };
    }
}
exports.default = PaymentMethodService;
//# sourceMappingURL=PaymentMethod.js.map