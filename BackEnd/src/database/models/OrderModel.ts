import { STRING } from 'sequelize';
import { Model, INTEGER, DECIMAL, DATE } from 'sequelize';
import db from '.';
import ClientModel from './ClientModel';
import PaymentMethodModel from './PaymentMethodModel';

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
// Order.belongsTo(ClientModel, { foreignKey: 'id', as: 'clientId' });
// ClientModel.hasMany(Order, { foreignKey: 'id', as: 'clientId'});

// // Payment Association
// PaymentMethodModel.hasMany(Order, { foreignKey: 'id', as: 'methodId' });
// Order.belongsTo(PaymentMethodModel, { foreignKey: 'id', as: 'methodId' });

export default Order;