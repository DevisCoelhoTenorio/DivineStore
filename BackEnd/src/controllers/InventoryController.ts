import { InventoryService } from '../services';
import { Response } from 'express';
import { ICustomRequest } from '../interfaces';
import 'express-async-errors'

export default class InventoryController {
    constructor(private service: InventoryService) {}

    public findAll = async (req: ICustomRequest, res: Response): Promise<void> => {
        const { inStock }= req.body;
        const result = await this.service.findAll(inStock);
        res.status(200).json(result);
    }
}