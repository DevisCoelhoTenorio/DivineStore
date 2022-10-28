import UserModel from '../database/models/UserModel';
import { IUser } from '../interfaces';

export default class UserService {
  public findAll = async (id?: number): Promise<IUser[]> => {
    const foundAllUsers = await UserModel.findAll({
        where: { id },
        attributes: { exclude: ['password']}
    });
    return foundAllUsers;
  };

  public create = async ({ email, password }: IUser):  Promise<IUser> => {
    const result = await UserModel.create({ email, password });
    return result;
  };

  public delete = async (id: number):Promise<void> => {
    await UserModel.destroy({ where: {id} });
  };

  public update = async (id:number, user: IUser): Promise<IUser[]> => {
    await UserModel.update({ ...user }, { where: { id } });
    const response = await this.findAll(id);
    return response;
  };

}
