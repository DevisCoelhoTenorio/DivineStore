import { Response } from 'express';
import { SizeService } from '../services';
import { ICustomRequest } from '../interfaces';
import 'express-async-errors';

export default class SizeController {
  constructor(private service: SizeService) {}

  public findAll = async (_req: ICustomRequest, res: Response): Promise<void> => {
    const result = await this.service.findAll();
    res.status(200).json(result);
  };
}
