import CategoryModel from '../database/models/CategoryModel';
import { ICategory } from '../interfaces';
import CustomError from '../utils/CustomError';

export default class CategoryService {
   
    public findAll = async(search = {}): Promise<ICategory[]> => {
        
        const result = await CategoryModel.findAll({
            where: search
        })
        
        return result;
    }

    public create = async({ name }: ICategory):  Promise<ICategory> => {
    
        const checkName = await this.findAll({ name });
        if(checkName.length > 1) {
            throw new CustomError('This category already exists', 'category.exists');
            
        }
        const result = await CategoryModel.create({ name });
        return result
    }
}