import { Model, INTEGER, STRING } from 'sequelize';
import db from '.'

class Size extends Model {
  id!: number;
  name!: string;
}

Size.init({
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
    modelName: 'sizes',
    timestamps: false
})

export default Size;
