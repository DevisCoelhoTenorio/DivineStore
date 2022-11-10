import SizeModel from '../database/models/SizeModel';
import ProductModel from '../database/models/ProductModel';
import InventoryModel from '../database/models/InventoryModel';
import PhotoModel from '../database/models/PhotoModel';
import { IProduct, IFullProduct } from '../interfaces';
import CategoryModel from '../database/models/CategoryModel';
import Sequelize from '../database/models';

export default class ProductService {
  public findAll = async (search = {}, inStock = {}): Promise<IProduct[]> => {
    const foundProducts = await ProductModel.findAll({
      where: search,
      attributes: { exclude: ['categoryId', 'description'] },
      include: [{
        model: CategoryModel, as: 'category', attributes: ['name'],
      }, {
        model: PhotoModel, as: 'photos', where: inStock, attributes: ['img', 'thumbnail'],
      }, {
        model: InventoryModel,
        as: 'stock',
        attributes: ['quantity'],
        include: [{
          model: SizeModel, as: 'size', attributes: ['name'],
        }],
      }],
    });
    return foundProducts;
  };

  public findById = async (id: number): Promise<IProduct | null> => {
    const result = await ProductModel.findByPk(id, {
      attributes: { exclude: ['categoryId'] },
      include: [{
        model: CategoryModel, as: 'category', attributes: ['name'],
      }, {
        model: PhotoModel, as: 'photos', attributes: ['img', 'thumbnail'],
      }, {
        model: InventoryModel,
        as: 'stock',
        attributes: ['quantity'],
        include: [{
          model: SizeModel,
          as: 'size',
          attributes: ['name'],
        }],
      }],
    });
    return result;
  };

  public create = async (newProduct: IFullProduct): Promise<IProduct | null> => {
    const { photos, sizes, ...rest } = newProduct;

    const newId = await Sequelize.transaction(async (t) => {
      const { id } = await ProductModel.create({ ...rest }, { transaction: t });
      const photosWithId = photos.map((photo) => ({ ...photo, productId: id }));
      const inventoryWithId = sizes.map((inventory) => ({
        productId: id,
        quantity: inventory.quantity,
        sizeId: inventory.id,
      }));
      await PhotoModel.bulkCreate(photosWithId, { transaction: t });
      await InventoryModel.bulkCreate(inventoryWithId, { transaction: t });
      return id;
    });

    const result = await this.findById(newId);
    return result;
  };
}
