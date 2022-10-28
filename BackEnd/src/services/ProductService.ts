import ProductModel from '../database/models/ProductModel';
import PhotoModel from '../database/models/PhotoModel';
import { IProduct, IFullProduct } from '../interfaces';
import CategoryModel from '../database/models/CategoryModel';
import Sequelize from '../database/models';

export default class ProductService { 

  public findAll = async(search = {}): Promise<IProduct[]> => {
    const foundProducts = await ProductModel.findAll({
      where: search,
      attributes: { exclude: ['categoryId'] },
      include: [{
        model: CategoryModel,
        as: 'category',
        attributes: ['name']
      }, {
        model: PhotoModel,
        as: 'photos',
        attributes: ['img', 'thumbnail']
      }],
    });
    return foundProducts;
  };

  public create = async(newProduct: IFullProduct):  Promise<IProduct> => {
    const { photos } = newProduct;
    
    const id =  await Sequelize.transaction(async (t) => {
      const { id } = await ProductModel.create({ ...newProduct }, { transaction: t });
      const photosWithId = photos.map((photo) => ({ ...photo, productId: id }));
      await PhotoModel.bulkCreate(photosWithId as any, { transaction: t });
      return id;
    });

    const result = await this.findAll({ id });
    return result[0];
  };
}
