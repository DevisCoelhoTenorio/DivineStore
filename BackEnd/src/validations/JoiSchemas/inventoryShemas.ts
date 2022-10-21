import Joi from 'joi';

const inStockSchema = Joi.object({
    inStock: Joi.boolean().required(),
});


export default {
    inStockSchema,
}