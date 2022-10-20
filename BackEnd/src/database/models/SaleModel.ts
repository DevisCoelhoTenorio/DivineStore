import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.'
import Order from './OrderModel';
import Product from './ProductModel';

class Sale extends Model {
  orderId!: number;
  productId!: number;
  quantity!: number;
  price!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

Sale.init({
  orderId: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  productId: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  quantity: {
    type: INTEGER,
    allowNull: false,
  },
  price: {
    type: STRING,
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
    modelName: 'sales',
})

// // Order Association
Sale.belongsTo(Order, { foreignKey: 'orderId', as: 'order' });
Order.hasMany(Sale, { foreignKey: 'orderId', as: 'order' });

// // Payment Association
Sale.belongsTo(Product, { foreignKey: 'productId', as: 'products' });
Product.hasMany(Sale, { foreignKey: 'productId', as: 'products' });

export default Sale;