import ProductModel from '../database/models/ProductModel';
import { IProduct } from '../interfaces';
import Category from '../database/models/CategoryModel';

export default class ProductService { 
  public findAll = async(): Promise<IProduct[]> => {
    const foundProducts = await ProductModel.findAll({
      attributes: { exclude: ['categoryId'] },
      include: {
        model: Category,
        as: 'category',
        attributes: ['name']
      },
    });
    return foundProducts;
  }

  public create = async(newProduct: IProduct):  Promise<IProduct> => {
    const result = await ProductModel.create({ ...newProduct });
    return result;
  }
}
