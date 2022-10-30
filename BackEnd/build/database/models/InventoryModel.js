"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const ProductModel_1 = __importDefault(require("./ProductModel"));
const SizeModel_1 = __importDefault(require("./SizeModel"));
class Inventory extends sequelize_1.Model {
}
Inventory.init({
    productId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    sizeId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    quantity: {
        type: sequelize_1.INTEGER,
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
    underscored: true,
    modelName: 'inventories',
});
// // Product Association
Inventory.belongsTo(ProductModel_1.default, { foreignKey: 'productId', as: 'product' });
ProductModel_1.default.hasMany(Inventory, { foreignKey: 'productId', as: 'product' });
// // Payment Association
Inventory.belongsTo(SizeModel_1.default, { foreignKey: 'sizeId', as: 'size' });
SizeModel_1.default.hasMany(Inventory, { foreignKey: 'sizeId', as: 'size' });
exports.default = Inventory;
//# sourceMappingURL=InventoryModel.js.map