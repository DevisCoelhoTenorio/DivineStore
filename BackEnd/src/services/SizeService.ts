import SizeModel from '../database/models/SizeModel';
import { ISize } from '../interfaces';

export default class SizeService {
  public findAll = async (): Promise<ISize[]> => {
    const result = await SizeModel.findAll();

    return result;
  };
}
