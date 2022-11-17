import AddressModel from '../database/models/AddressModel';
import { IAddress } from '../interfaces';
// import CustomError from '../utils/CustomError';

export default class AddressService {
  public find = async (search = {}): Promise<IAddress[]> => {
    const result = await AddressModel.findAll({
      where: search,
    });
    return result;
  };
}
