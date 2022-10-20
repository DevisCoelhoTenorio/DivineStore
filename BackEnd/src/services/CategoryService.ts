import CategoryModel from '../database/models/CategoryModel';
import { ICategory } from '../interfaces';

export default class CategoryService {
   
    public findAll = async(): Promise<ICategory[]> => {

        const result = await CategoryModel.findAll()
        
        return result;
    }
    // public create = async({ email, password }: IUser):  Promise<IUser> => {
    //     const result = await CategoryModel.create({ email, password });
    //     return result
    // }
}