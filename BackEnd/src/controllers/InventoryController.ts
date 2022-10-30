import { Response } from 'express';
import { InventoryService } from '../services';
import { ICustomRequest } from '../interfaces';
import 'express-async-errors';

export default class InventoryController {
  constructor(private service: InventoryService) {}

  public find = async (req: ICustomRequest, res: Response): Promise<void> => {
    const { inStock } = req.body;
    const result = await this.service.find(inStock);
    res.status(200).json(result);
  };
}
