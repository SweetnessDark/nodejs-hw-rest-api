const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const updateSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean(),
});

module.exports = {
  schema,
  updateSchema,
  updateFavoriteSchema,
};
