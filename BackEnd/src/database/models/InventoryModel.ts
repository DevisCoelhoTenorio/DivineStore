import { Model, INTEGER, DATE } from 'sequelize';
import db from '.'
import Product from './ProductModel';
import Size from './SizeModel';

class Inventory extends Model {
  declare productId: number;
  declare sizeId: number;
  declare quantity: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Inventory.init({
  productId: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  sizeId: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  quantity: {
    type: INTEGER,
    allowNull: false,
  },
  updatedAt: {
    type: DATE
  },
  createdAt: {
    type: DATE
  }
}, {
    sequelize: db,
    underscored: true,
    modelName: 'inventories',
})

// // Product Association
Inventory.belongsTo(Product, { foreignKey: 'productId', as: 'stock' });
Product.hasMany(Inventory, { foreignKey: 'productId', as: 'stock' });

// // Payment Association
Inventory.belongsTo(Size, { foreignKey: 'sizeId', as: 'size' });
Size.hasMany(Inventory, { foreignKey: 'sizeId', as: 'size' });

export default Inventory;