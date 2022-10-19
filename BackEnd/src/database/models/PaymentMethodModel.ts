import { Model, INTEGER, STRING } from 'sequelize';
import db from '.'

class PaymentMethod extends Model {
  id!: number;
  category!: string;
}

PaymentMethod.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  method: {
    type: STRING,
    allowNull: false,
  },
}, {
    sequelize: db,
    modelName: 'paymentMethods'
})

export default PaymentMethod;