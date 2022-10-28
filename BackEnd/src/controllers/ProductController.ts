import { ProductService } from '../services';
import { Response } from 'express';
import { ICustomRequest, IFullProduct } from '../interfaces';
import 'express-async-errors'

export default class ProductController {
  constructor(private service: ProductService) { }

  public findAll = async (_req: ICustomRequest, res: Response): Promise<void> => {
    const result = await this.service.findAll();
    res.status(200).json(result);
  }
  public create = async (req: ICustomRequest, res: Response) : Promise<void> => {
    const result = await this.service.create(req.body as IFullProduct)
    res.status(201).json(result);
  }
}