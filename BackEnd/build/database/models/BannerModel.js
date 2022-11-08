"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Banner extends sequelize_1.Model {
}
Banner.init({
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
    img: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.DATE
    },
    createdAt: {
        type: sequelize_1.DATE
    }
}, {
    sequelize: _1.default,
    modelName: 'banners',
    underscored: true,
});
exports.default = Banner;
//# sourceMappingURL=BannerModel.js.map