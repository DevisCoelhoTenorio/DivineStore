import { Model, INTEGER, STRING, BOOLEAN } from 'sequelize';
import db from '.'
import Product from './ProductModel';

class Photo extends Model {
  id!: number;
  productId!: number;
  img!: string;
  thumbnail!: boolean;
}

Photo.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  productId: {
    primaryKey: true,
    type: INTEGER,
    allowNull: false
  },
  img: {
    primaryKey: true,
    type: STRING,
    allowNull: false,
  },
  thumbnail: {
    type: BOOLEAN,
  }
}, {
    sequelize: db,
    modelName: 'photos',
    timestamps: false,
    underscored: true
})

// Photo-Product Association (N:1)
Photo.belongsTo(Product, { foreignKey: 'productId', as: 'photos' });
Product.hasMany(Photo, { foreignKey: 'productId', as: 'photos' });

export default Photo;