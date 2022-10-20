import { Model, INTEGER, STRING } from 'sequelize';
import db from '.'

class PaymentMethod extends Model {
  id!: number;
  name!: string;
}

PaymentMethod.init({
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
}, {
    sequelize: db,
    modelName: 'paymentMethods',
    timestamps: false
})

export default PaymentMethod;