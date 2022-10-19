import { Model, INTEGER, DATE } from 'sequelize';
import db from '.'

class Inventory extends Model {
  productId!: number;
  sizeId!: string;
  quantity!: number;
  createdAt!: Date;
  UpdatedAt!: Date;
}

Inventory.init({
  productId: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  sizeId: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  quantity: {
    type: INTEGER,
    allowNull: false,
  },
  updatedAt: {
    type: DATE
  },
  createAt: {
    type: DATE
  }
}, {
    sequelize: db,
    underscored: true,
    modelName: 'inventories',
})

export default Inventory;