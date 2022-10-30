import { NextFunction, Response } from 'express';
import { ICustomRequest } from '../interfaces';
import { categorySchemas } from '../validations/JoiSchemas';
import throwError from '../utils/ThrowError';

const find = (req: ICustomRequest, _res: Response, next: NextFunction) => {
  const { error } = categorySchemas.find.validate(req.body);
  if (error) throwError(error);
  next();
};

const create = (req: ICustomRequest, _res: Response, next: NextFunction) => {
  const { error } = categorySchemas.create.validate(req.body);
  if (error) throwError(error);
  next();
};

export default {
  find,
  create,
};
