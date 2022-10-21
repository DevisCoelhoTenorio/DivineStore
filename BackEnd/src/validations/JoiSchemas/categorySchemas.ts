
import Joi from 'joi';

const find = Joi.object({
    id: Joi.number(),
    name: Joi.string(),
});

const create = Joi.object({
    name: Joi.string().required(),
});

export default {
    find,
    create,
}