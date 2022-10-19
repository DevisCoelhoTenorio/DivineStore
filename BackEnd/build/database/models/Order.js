"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const ClientModel_1 = __importDefault(require("./ClientModel"));
const PaymentMethodModel_1 = __importDefault(require("./PaymentMethodModel"));
class Order extends sequelize_1.Model {
}
Order.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    clientId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    methodId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    fullPrice: {
        type: sequelize_1.DECIMAL,
        allowNull: false,
    },
    installments: {
        type: sequelize_1.INTEGER,
    },
    updatedAt: {
        type: sequelize_1.DATE
    },
    createAt: {
        type: sequelize_1.DATE
    }
}, {
    sequelize: _1.default,
    underscored: true,
    modelName: 'orders'
});
// Client Association
Order.belongsTo(ClientModel_1.default, { foreignKey: 'id', as: 'clientId' });
ClientModel_1.default.hasMany(Order, { foreignKey: 'id', as: 'clientId' });
// Payment Association
PaymentMethodModel_1.default.hasMany(Order, { foreignKey: 'id', as: 'methodId' });
Order.belongsTo(PaymentMethodModel_1.default, { foreignKey: 'id', as: 'methodId' });
exports.default = Order;
