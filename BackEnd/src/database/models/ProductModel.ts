import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.'

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
  createAt: {
    type: DATE
  }
}, {
    sequelize: db,
    underscored: true,
    modelName: 'products',
})

export default Product;
