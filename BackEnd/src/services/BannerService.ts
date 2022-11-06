import BannerModel from '../database/models/BannerModel';
import { IBanner, IBannerCreate } from '../interfaces';
import CustomError from '../utils/CustomError';

export default class BannerService {
  public find = async (search = {}): Promise<IBanner[]> => {
    const result = await BannerModel.findAll({
      where: search,
    });

    return result;
  };

  public create = async ({ name, img }: IBannerCreate): Promise<IBanner> => {
    const checkName = await this.find({ img });
    if (checkName.length >= 1) {
      throw new CustomError('This banner already exists', 'banner.exists');
    }
    const result = await BannerModel.create({ name, img });
    return result;
  };

  public delete = async (id: number): Promise<void> => {
    await BannerModel.destroy({
      where: { id },
    });
  };
}
