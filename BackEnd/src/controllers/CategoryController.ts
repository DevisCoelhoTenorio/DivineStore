import { CategoryService } from '../services';
import { Response } from 'express';
import { ICustomRequest } from '../interfaces';
import 'express-async-errors'

export default class CategoryController {
    constructor(private service: CategoryService) {}

    public find = async (req: ICustomRequest, res: Response): Promise<void> => {
        const result = await this.service.find(req.body);
        res.status(200).json(result);
    }
    public create = async (req: ICustomRequest, res: Response) : Promise<void> => {
        const result = await this.service.create(req.body)
        res.status(201).json(result);
    }
}