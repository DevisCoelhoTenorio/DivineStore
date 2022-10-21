import Order from '../database/models/OrderModel';
import Product from '../database/models/ProductModel';
import SaleModel from '../database/models/SaleModel';
import { ISale } from '../interfaces';

export default class SaleService {
   
    public findAll = async(): Promise<ISale[]> => {

        const result = await SaleModel.findAll({
            include: [{
                model: Order,
                as: 'order',
                attributes: { exclude: ['updatedAt', 'createAt'] }
            },
            {
                model: Product,
                as: 'products',
                attributes: { exclude: ['updatedAt', 'createAt'] }
            }
        ]
        })
        
        return result;
    }
   
}