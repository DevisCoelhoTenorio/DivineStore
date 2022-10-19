"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Product extends sequelize_1.Model {
}
Product.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.STRING,
    },
    categoryId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
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
    modelName: 'products',
});
exports.default = Product;
