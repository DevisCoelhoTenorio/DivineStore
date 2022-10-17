"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Category extends sequelize_1.Model {
}
Category.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    category: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'categories'
});
exports.default = Category;