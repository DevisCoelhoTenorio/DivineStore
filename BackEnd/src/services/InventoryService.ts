import { Op } from 'sequelize';
import Category from '../database/models/CategoryModel';
import InventoryModel from '../database/models/InventoryModel';
import Product from '../database/models/ProductModel';
import Size from '../database/models/SizeModel';
import { IInventory } from '../interfaces';

export default class InventoryService {
   
    public findAll = async(inStock = true): Promise<IInventory[]> => {

        const confRequest = inStock  ? { [Op.gt]: 0 } : 0

        const result = await InventoryModel.findAll({
            where: {quantity: confRequest },
            attributes: { exclude: ['productId', 'sizeId'] },
            include: [{
                model: Product,
                as: 'product',
                include: [{
                    attributes: { exclude: ['id'] },
                    model: Category,
                    as: 'category'
                }],
                attributes: {
                    exclude: ['updatedAt', 'createdAt', 'categoryId', 'id']
                }
            },
            {
                attributes: { exclude: ['id'] },
                model: Size,
                as: 'size',
            }
        ]
        })
        
        return result;
    }
}