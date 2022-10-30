import Joi from 'joi';

const create = Joi.object({
  email: Joi.string().email(),
  name: Joi.string().required(),
  phoneNumber: Joi.string().min(8),
});

const find = Joi.object({
  id: Joi.number(),
  name: Joi.string(),
  phoneNumber: Joi.string(),
  email: Joi.string(),
});

export default {
  create,
  find,
};
