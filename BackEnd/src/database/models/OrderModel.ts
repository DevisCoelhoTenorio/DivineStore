import { STRING } from 'sequelize';
import { Model, INTEGER, DATE } from 'sequelize';
import db from '.';
import Client from './ClientModel';
import PaymentMethod from './PaymentMethodModel';

class Order extends Model {
  id!: number;
  clientId!: number;
  methodId!: number;
  fullPrice!: string;
  installments!:number;
  updatedAt!: Date;
  createAt!: Date;
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
  },
  methodId: {
    type: INTEGER,
    allowNull: false,
  },
  fullPrice: {
    type: STRING,
    allowNull: false,
  },
  installments: {
    type: INTEGER,
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
    modelName: 'orders'
})

// // Client Association
Order.belongsTo(Client, { foreignKey: 'clientId', as: 'client' });
Client.hasMany(Order, { foreignKey: 'clientId', as: 'client' });

// // Payment Association
Order.belongsTo(PaymentMethod, { foreignKey: 'methodId', as: 'paymentMethod' });
PaymentMethod.hasMany(Order, { foreignKey: 'methodId', as: 'paymentMethod' });

export default Order;