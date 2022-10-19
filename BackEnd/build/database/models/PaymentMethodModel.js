"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class PaymentMethod extends sequelize_1.Model {
}
PaymentMethod.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    method: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'paymentMethods'
});
exports.default = PaymentMethod;
