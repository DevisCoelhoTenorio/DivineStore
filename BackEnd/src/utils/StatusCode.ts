import { IStatusCode } from '../interfaces';

const statusCode: IStatusCode = {
  'array.min': 422,
  'any.required': 400,
  'string.empty': 422,
  'string.min': 422,
  'string.base': 422,
  'invalid.login': 401,
  'fatal.error': 500,
  'not.token': 401,
  'number.base': 422,
  'number.min': 422,
  'array.base': 422,
  'array.required': 422,
  'array.includesRequiredUnknowns': 422,
  'object.base': 422,
  'any.custom': 422,
  'boolean.base': 422,
  'find.category': 422,
  'object.unknown': 422,
  'already.exists': 422,
  'not exist': 422,
  'not.login': 401,
};

export default statusCode;
