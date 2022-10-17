"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("sequelize");
const _1 = __importDefault(require("."));
class User extends sequelize_2.Model {
}
User.init({
    id: {
        type: sequelize_2.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: sequelize_2.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_2.STRING,
        allowNull: false,
    },
    admin: {
        type: sequelize_1.BOOLEAN,
        allowNull: false,
    }
}, {
    sequelize: _1.default,
    modelName: 'users',
    timestamps: false,
});
exports.default = User;
