import PhotoModel from '../database/models/PhotoModel';
import { IPhoto } from '../interfaces';

export default class PhotoService {
   
    public findAll = async(search = {}): Promise<IPhoto []> => {
        const result = await PhotoModel.findAll({
            where: { search }
        })
        
        return result;
    }

    public create = async (newImg: IPhoto): Promise<IPhoto> => {
        const result = await PhotoModel.create({ ...newImg });
        return result;
    }

    public delete = async (id: number): Promise<void> => {
        await PhotoModel.destroy({
            where: { id }
        });
    }
   
}