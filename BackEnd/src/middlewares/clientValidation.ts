import { NextFunction, Response } from 'express';
import { ICustomRequest } from '../interfaces';
import { clientSchemas } from '../validations/JoiSchemas';
import throwError from '../utils/ThrowError';

const create = (req: ICustomRequest, _res: Response, next: NextFunction) => {
  const { error } = clientSchemas.create.validate(req.body);
  if (error) throwError(error);
  next();
};

const find = (req: ICustomRequest, _res: Response, next: NextFunction) => {
  const { error } = clientSchemas.find.validate(req.body);
  if (error) throwError(error);
  next();
};

export default {
  create,
  find,
};
