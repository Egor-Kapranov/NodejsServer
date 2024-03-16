const Joi = require("joi");

const restaurantValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().max(30).required(),
    description: Joi.string().min(30).required(),
    image: Joi.string().required(),
  });
  return schema.validate(data);
};
module.exports = { restaurantValidation };
