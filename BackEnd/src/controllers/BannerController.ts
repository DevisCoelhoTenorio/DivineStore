import { Response } from 'express';
import { BannerService } from '../services';
import { ICustomRequest } from '../interfaces';
import 'express-async-errors';

export default class BannerController {
  constructor(private service: BannerService) {}

  public find = async (req: ICustomRequest, res: Response): Promise<void> => {
    const result = await this.service.find(req.body);
    res.status(200).json(result);
  };

  public create = async (req: ICustomRequest, res: Response) : Promise<void> => {
    const result = await this.service.create(req.body);
    res.status(201).json(result);
  };

  public delete = async (req: ICustomRequest, res: Response): Promise<void> => {
    const { id } = req.params;
    await this.service.delete(Number(id));
    res.status(200).json({ message: 'Banner deletado com sucesso' });
  };
}
