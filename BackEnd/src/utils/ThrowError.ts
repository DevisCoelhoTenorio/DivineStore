import { ValidationError } from 'joi';
import CustomError from './CustomError';

export default (error: ValidationError): void => {
  const { type } = error.details[0];
  throw new CustomError(error.message, type);
};
