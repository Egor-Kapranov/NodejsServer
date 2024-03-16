const Joi = require("joi");

const userValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    telephone: Joi.string().length(9).pattern(/^\d+$/).required(),
    password: Joi.string().min(6).max(14).required(),
  });
  return schema.validate(data);
};
module.exports = { userValidation };
