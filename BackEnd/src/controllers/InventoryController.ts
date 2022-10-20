import { InventoryService } from '../services';
import { Request, Response } from 'express';
import 'express-async-errors'

export default class InventoryController {
    constructor(private service: InventoryService) {}

    public findAll = async (req: Request, res: Response): Promise<void> => {
        const { inStock }= req.body;
        const result = await this.service.findAll(inStock);
        res.status(200).json(result);
    }
    // public create = async (req: Request, res: Response) : Promise<void> => {
    //     const result = await this.userService.create(req.body)
    //     res.status(201).json(result);
    // }
}