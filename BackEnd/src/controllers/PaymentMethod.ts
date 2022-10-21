import { PaymentMethodService } from '../services';
import { Response } from 'express';
import { ICustomRequest } from '../interfaces';
import 'express-async-errors'

export default class PaymentMethodController {
    constructor(private service: PaymentMethodService) {}

    public findAll = async (_req: ICustomRequest, res: Response): Promise<void> => {
        const result = await this.service.findAll();
        res.status(200).json(result);
    }
}