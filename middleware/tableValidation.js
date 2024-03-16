const Joi = require("joi");

const tableValidation = (data) => {
  const schema = Joi.object({
    table_position: Joi.string().max(40).required(),
    restaurant_id: Joi.number().positive().required(),
  });
  return schema.validate(data);
};
module.exports = { tableValidation };
