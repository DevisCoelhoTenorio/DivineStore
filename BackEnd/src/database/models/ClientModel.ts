import { Model, INTEGER, STRING } from 'sequelize';
import db from '.'

class Client extends Model {
  id!: number;
  name!: string;
  email!: string;
  phone_number!: string;
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
}, {
    sequelize: db,
    underscored: true,
    modelName: 'clients'
})

export default Client;
