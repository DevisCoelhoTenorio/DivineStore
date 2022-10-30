"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const ProductModel_1 = __importDefault(require("./ProductModel"));
class Photo extends sequelize_1.Model {
}
Photo.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    productId: {
        primaryKey: true,
        type: sequelize_1.INTEGER,
        allowNull: false
    },
    img: {
        primaryKey: true,
        type: sequelize_1.STRING,
        allowNull: false,
    },
    thumbnail: {
        type: sequelize_1.BOOLEAN,
    }
}, {
    sequelize: _1.default,
    modelName: 'photos',
    timestamps: false,
    underscored: true
});
// Photo-Product Association (N:1)
Photo.belongsTo(ProductModel_1.default, { foreignKey: 'productId', as: 'photos' });
ProductModel_1.default.hasMany(Photo, { foreignKey: 'productId', as: 'photos' });
exports.default = Photo;
//# sourceMappingURL=PhotoModel.js.map