const Joi = require("joi");

const reviewValidation = (data) => {
  const schema = Joi.object({
    comment: Joi.string().min(5).max(220).required(),
    com_date: Joi.date().required(),
    user_id: Joi.number().required(),
    restaurant_id: Joi.number().required(),
  });
  return schema.validate(data);
};
module.exports = { reviewValidation };
