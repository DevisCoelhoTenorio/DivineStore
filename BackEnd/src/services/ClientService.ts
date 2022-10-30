import ClientModel from '../database/models/ClientModel';
import { IClient } from '../interfaces';
import CustomError from '../utils/CustomError';

export default class ClientService {
  public find = async (search = {}): Promise<IClient[]> => {
    const result = await ClientModel.findAll({
      where: search,
    });

    return result;
  };

  public create = async (client: IClient): Promise<IClient> => {
    const checkEmail = await this.find({ email: client.email });
    const checkPhoneNumber = await this.find({ phoneNumber: client.phoneNumber });

    if (checkEmail.length > 1 || checkPhoneNumber.length > 1) {
      throw new CustomError('Email or PhoneNumber already exists', 'already.exists');
    }

    const result = await ClientModel.create({ ...client });

    return result;
  };

  public update = async (id: number, client: IClient): Promise<IClient> => {
    const checkId = await this.find({ id });

    if (checkId.length !== 1) {
      throw new CustomError('Client does not exist', 'not.exist');
    }

    await ClientModel.update({ ...client }, { where: { id } });

    const [result] = await this.find({ id });

    return result;
  };

  public delete = async (search = {}): Promise<string> => {
    const checkUser = await this.find(search);

    if (checkUser.length !== 1) {
      throw new CustomError('Client does not exist', 'not.exist');
    }

    await ClientModel.destroy({
      where: search,
    });

    return 'Client has been deleted';
  };
}
