import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.'

class Banner extends Model {
  declare id: number;
  declare name: string;
  declare img: string;
  declare updatedAt: Date;
  declare createdAt: Date;
}

Banner.init({
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
  img: {
    type: STRING,
    allowNull: false,
  },
  updatedAt: {
    type: DATE
  },
  createdAt: {
    type: DATE
  }
}, {
    sequelize: db,
    modelName: 'banners',
    underscored: true,
})

export default Banner;