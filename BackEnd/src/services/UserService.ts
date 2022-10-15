
import { CreateOptions } from 'sequelize';
import UserModel from '../database/models/UserModel';
import { IUser } from '../interfaces/IUser';

export default class UserService {
   
    public findAll = async(): Promise<IUser[]> => {

        const foundAllUsers = await UserModel.findAll({
            attributes: { exclude: ['password']}
        })
        
        return foundAllUsers;
    }
    public create = async({ email, password }: IUser):  Promise<IUser> => {
        const result = await UserModel.create({ email, password });
        return result
    }
}