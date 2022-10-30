import { Response } from 'express';
import { OrderService } from '../services';
import { ICustomRequest } from '../interfaces';
import 'express-async-errors';

export default class OrderController {
  constructor(private service: OrderService) {}

  public findAll = async (_req: ICustomRequest, res: Response): Promise<void> => {
    const result = await this.service.findAll();
    res.status(200).json(result);
  };
}
