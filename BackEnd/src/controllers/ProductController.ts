import { NextFunction, Response, Request } from 'express';
import { ProductService } from '../services';
import { IFullProduct } from '../interfaces';
import 'express-async-errors';

export default class ProductController {
  private service: ProductService;

  constructor(service: ProductService) {
    this.service = service;
  }

  public findAll = async (_req: Request, res: Response): Promise<void> => {
    const result = await this.service.findAll();
    res.status(200).json(result);
  };

  public findById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const result = await this.service.findById(Number(id));
    res.status(200).json(result);
  };

  public findByInStock = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { inStock } = req.query;
    if (!inStock) {
      return next();
    }
    const stockStatus = inStock === 'true';
    const result = await this.service.findAll({}, { inStock: stockStatus });
    res.status(200).json(result);
  };

  public create = async (req: Request, res: Response) : Promise<void> => {
    const result = await this.service.create(req.body as IFullProduct);
    res.status(201).json(result);
  };

  public delete = async (req: Request, res: Response) : Promise<void> => {
    const { id } = req.params;
    await this.service.delete(Number(id));
    res.status(200).json({ id });
  };
}
