import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.'
import Client from './ClientModel';

class Address extends Model {
  clientId!: number;
  city!: string;
  state!: string;
  district!: string;
  locality!: string;
  number!: number;
  cep!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

Address.init({
  clientId: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  city: {
    type: STRING,
    allowNull: false,
  },
  state: {
    type: STRING,
    allowNull: false,
  },
  district: {
    type: STRING,
    allowNull: false,
  },
  locality: {
    type: STRING,
    allowNull: false,
  },
  number: {
    type: INTEGER,
  },
  cep: {
    type: STRING,
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
    modelName: 'addresses',
})

// Adress Association
Address.belongsTo(Client, { foreignKey: 'clientId', as: 'address' });
Client.belongsTo(Address, { foreignKey: 'id', as: 'address' });

export default Address;