import { NextFunction, Response } from 'express';
import { ICustomRequest } from '../interfaces';
import { userSchemas } from '../validations/JoiSchemas';
import throwError from '../utils/ThrowError';

const login = (req: ICustomRequest, _res: Response, next: NextFunction) => {
  const { error } = userSchemas.login.validate(req.body);
  if (error) throwError(error);
  next();
};

export default {
  login,
};
