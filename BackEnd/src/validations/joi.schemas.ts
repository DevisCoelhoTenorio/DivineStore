import Joi from 'joi';

const inStockSchema = Joi.object({
    inStock: Joi.boolean().required(),
});

// Category
const findCategorySchema = Joi.object({
    id: Joi.number(),
    name: Joi.string(),
});

const createCategorySchema = Joi.object({
    name: Joi.string().required(),
});

// Client
const createClientSchema = Joi.object({
    email: Joi.string().email(),
    name: Joi.string().required(),
    phoneNumber: Joi.string().min(8),
})

const findClientSchema = Joi.object({
    id: Joi.number(),
    name: Joi.string(),
    phoneNumber: Joi.string(),
    email: Joi.string(),
})

export default {
    createClientSchema,
    createCategorySchema,
    findCategorySchema,
    inStockSchema,
    findClientSchema,
}
