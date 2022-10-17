import { Model, INTEGER, STRING } from 'sequelize';
import db from '.'

class Size extends Model {
  id!: number;
  size!: string;
}

Size.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  size: {
    type: STRING,
    allowNull: false,
  },
}, {
    sequelize: db,
    modelName: 'sizes'
})

export default Size;
