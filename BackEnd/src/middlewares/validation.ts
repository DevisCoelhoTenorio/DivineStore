import { NextFunction, Response } from "express";
import CustomError from "../utils/CustomError";
import { ICustomRequest } from "../interfaces";
import validation from "../validations/joi.schemas"
import {ValidationError} from 'joi'

const throwError = (error: ValidationError): void => {
    const { type } = error.details[0];
        throw  new CustomError(error.message, type);
};

const inStock = (req: ICustomRequest, _res: Response, next: NextFunction ) => {
    const { error } = validation.inStockSchema.validate(req.body);
    if(error) throwError(error);
    next();
};

const findCategory = (req: ICustomRequest, _res: Response, next: NextFunction) => {
    const { error } = validation.findCategorySchema.validate(req.body);
    if(error) throwError(error);
    next();
};

const createCategory = (req: ICustomRequest, _res: Response, next: NextFunction) => {
    const { error } = validation.createCategorySchema.validate(req.body);
    if(error) throwError(error);
    next();
};

const createClient = (req: ICustomRequest, _res: Response, next: NextFunction) => {
    const { error } = validation.createClientSchema.validate(req.body);
    if(error) throwError(error);
    next();
};

const findClient = (req: ICustomRequest, _res: Response, next: NextFunction) => {
    const { error } = validation.findClientSchema.validate(req.body);
    if(error) throwError(error);
    next();
};


export default { 
    inStock,
    findCategory,
    createCategory,
    createClient,
    findClient,
}
