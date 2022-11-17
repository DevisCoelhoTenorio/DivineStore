import { Response } from 'express';
import { AddressService } from '../services';
import { ICustomRequest } from '../interfaces';
import 'express-async-errors';

export default class AddressController {
  constructor(private service: AddressService) {}

  public find = async (req: ICustomRequest, res: Response): Promise<void> => {
    const result = await this.service.find(req.body);
    res.status(200).json(result);
  };
}
