import { NextFunction, Request, Response } from 'express'
import CustomError from '../utils/CustomError';
import statusCode from '../utils/StatusCode';

class ErrorHandler {
    public static handle(error: CustomError, _req: Request, res: Response, _next: NextFunction) {
        console.log(error);
        if (error.type) {
            return res.status(statusCode[error.type] || 500).json({ message: error.message });
          }
          return res.status(statusCode['fatal.error']).json({ message: error.message });
    }
}

export { ErrorHandler }