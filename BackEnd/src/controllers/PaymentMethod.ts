import { PaymentMethodService } from '../services';
import { Request, Response } from 'express';
import 'express-async-errors'

export default class PaymentMethodController {
    constructor(private service: PaymentMethodService) {}

    public findAll = async (_req: Request, res: Response): Promise<void> => {
        const result = await this.service.findAll();
        res.status(200).json(result);
    }
    // public create = async (req: Request, res: Response) : Promise<void> => {
    //     const result = await this.userService.create(req.body)
    //     res.status(201).json(result);
    // }
}