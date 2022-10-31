import UserModel from '../database/models/UserModel';
import { IUser } from '../interfaces';

export default class UserService {
  public findAll = async (search = {}): Promise<IUser[]> => {
    const result = await UserModel.findAll({
      where: search,
      attributes: { exclude: ['password'] },
    });
    return result;
  };

  public create = async ({ email, password }: IUser): Promise<IUser> => {
    const result = await UserModel.create({ email, password });
    return result;
  };

  public delete = async (id: number):Promise<void> => {
    await UserModel.destroy({ where: { id } });
  };

  public update = async (id:number, user: IUser): Promise<IUser[]> => {
    await UserModel.update({ ...user }, { where: { id } });
    const result = await this.findAll(id);
    return result;
  };
}
