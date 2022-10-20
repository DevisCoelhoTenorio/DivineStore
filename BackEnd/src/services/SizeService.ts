import SizeModel from '../database/models/SizeModel';
import { ISize } from '../interfaces';

export default class SizeService {
   
    public findAll = async(): Promise<ISize[]> => {

        const result = await SizeModel.findAll()
        
        return result;
    }
    // public create = async({ email, password }: IUser):  Promise<IUser> => {
    //     const result = await CategoryModel.create({ email, password });
    //     return result
    // }
}