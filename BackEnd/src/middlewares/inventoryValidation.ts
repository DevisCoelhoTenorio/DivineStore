import { NextFunction, Response } from 'express';
import { ICustomRequest } from '../interfaces';
import { inventoryShemas } from '../validations/JoiSchemas';
import throwError from '../utils/ThrowError';

const find = (req: ICustomRequest, _res: Response, next: NextFunction) => {
  const { error } = inventoryShemas.inStockSchema.validate(req.body);
  if (error) throwError(error);
  next();
};

export default {
  find,
};
