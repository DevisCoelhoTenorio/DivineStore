import { Model, INTEGER } from 'sequelize';
import db from '.'

class Order extends Model {
  id!: number;
  clientId!: number;
}

Order.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  clientId: {
    type: INTEGER,
    allowNull: false,
  }
}, {
    sequelize: db,
    underscored: true,
    modelName: 'clients'
})

export default Order;