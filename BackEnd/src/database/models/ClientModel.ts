import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.'

class Client extends Model {
  id!: number;
  name!: string;
  email!: string;
  phoneNumber!: string;
  updatedAt!: Date;
  createdAt!: Date;
}

Client.init({
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
  email: {
    type: STRING,
  },
  phoneNumber: {
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
    modelName: 'clients'
})

export default Client;
