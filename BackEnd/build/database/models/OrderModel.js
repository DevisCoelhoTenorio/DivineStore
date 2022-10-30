"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("sequelize");
const _1 = __importDefault(require("."));
const ClientModel_1 = __importDefault(require("./ClientModel"));
const PaymentMethodModel_1 = __importDefault(require("./PaymentMethodModel"));
class Order extends sequelize_2.Model {
}
Order.init({
    id: {
        type: sequelize_2.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    clientId: {
        type: sequelize_2.INTEGER,
        allowNull: false,
    },
    methodId: {
        type: sequelize_2.INTEGER,
        allowNull: false,
    },
    fullPrice: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    installments: {
        type: sequelize_2.INTEGER,
    },
    updatedAt: {
        type: sequelize_2.DATE
    },
    createdAt: {
        type: sequelize_2.DATE
    }
}, {
    sequelize: _1.default,
    underscored: true,
    modelName: 'orders'
});
// // Client Association
Order.belongsTo(ClientModel_1.default, { foreignKey: 'clientId', as: 'client' });
ClientModel_1.default.hasMany(Order, { foreignKey: 'clientId', as: 'client' });
// // Payment Association
Order.belongsTo(PaymentMethodModel_1.default, { foreignKey: 'methodId', as: 'paymentMethod' });
PaymentMethodModel_1.default.hasMany(Order, { foreignKey: 'methodId', as: 'paymentMethod' });
exports.default = Order;
//# sourceMappingURL=OrderModel.js.map