import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';
import Category from './CategoryModel';

class Product extends Model {
  id!: number;
  name!: string;
  price!: string;
  description!: string;
  categoryId!: number;
  createdAt!: Date;
  UpdatedAt!: Date;
}

Product.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  price: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: STRING,
  },
  categoryId: {
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
    modelName: 'products',
});

// Product-Category Association (N:1)
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
Category.hasMany(Product, { foreignKey: 'categoryId', as: 'category' });

export default Product;
