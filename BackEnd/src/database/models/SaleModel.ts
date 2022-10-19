import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.'

class Sale extends Model {
  orderId!: number;
  productId!: string;
  quantity!: number;
  price!: string;
  createdAt!: Date;
  UpdatedAt!: Date;
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
  createAt: {
    type: DATE
  }
}, {
    sequelize: db,
    underscored: true,
    modelName: 'sales',
})

export default Sale;