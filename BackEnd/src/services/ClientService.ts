import ClientModel from '../database/models/ClientModel';
import { IClient } from '../interfaces';

export default class ClientService {
   
    public findAll = async(): Promise<IClient[]> => {

        const result = await ClientModel.findAll()
        
        return result;
    }
    // public create = async({ email, password }: IUser):  Promise<IUser> => {
    //     const result = await UserModel.create({ email, password });
    //     return result
    // }
}