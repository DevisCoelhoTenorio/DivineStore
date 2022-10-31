import Size from '../database/models/SizeModel';
import Inventory from '../database/models/InventoryModel';
import ProductModel from '../database/models/ProductModel';
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
        model: CategoryModel,
        as: 'category',
        attributes: ['name'],
      }, {
        model: PhotoModel,
        as: 'photos',
        where: inStock,
        attributes: ['img', 'thumbnail'],
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
        model: Inventory,
        as: 'stock',
        attributes: ['quantity'],
        include: [{
          model: Size,
          as: 'size',
          attributes: ['name'],
        }],
      }],
    });
    return result;
  };

  public create = async (newProduct: IFullProduct): Promise<IProduct> => {
    const { photos } = newProduct;

    const newId = await Sequelize.transaction(async (t) => {
      const { id } = await ProductModel.create({ ...newProduct }, { transaction: t });
      const photosWithId = photos.map((photo) => ({ ...photo, productId: id }));
      await PhotoModel.bulkCreate(photosWithId, { transaction: t });
      return id;
    });

    const result = await this.findAll({ newId });
    return result[0];
  };
}
