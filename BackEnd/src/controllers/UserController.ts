import { UserService } from '../services';
import { Response } from 'express';
import { ICustomRequest } from '../interfaces';
import 'express-async-errors'

export default class UserController {
    constructor(private service: UserService) {}

    public findAll = async (_req: ICustomRequest, res: Response): Promise<void> => {
        const result = await this.service.findAll();
        res.status(200).json(result);
    }
    public create = async (req: ICustomRequest, res: Response) : Promise<void> => {
        const result = await this.service.create(req.body)
        res.status(201).json(result);
    }
}