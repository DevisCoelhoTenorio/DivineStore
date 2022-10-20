import { Model, INTEGER, STRING } from 'sequelize';
import db from '.'

class Category extends Model {
  id!: number;
  name!: string;
}

Category.init({
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
    modelName: 'categories',
    timestamps: false
})

export default Category;
