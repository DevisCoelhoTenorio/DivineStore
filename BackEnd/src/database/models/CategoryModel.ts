import { Model, INTEGER, STRING } from 'sequelize';
import db from '.'

class Category extends Model {
  id!: number;
  category!: string;
}

Category.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  category: {
    type: STRING,
    allowNull: false,
  },
}, {
    sequelize: db,
    modelName: 'categories'
})

export default Category;
