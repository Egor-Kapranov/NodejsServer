const Joi = require("joi");

const reservationValidation = (data) => {
  const schema = Joi.object({
    reserv_datetime: Joi.date()
      .required()
      .min("2023-01-01T10:00")
      .max("2024-12-31T22:00"),
    user_id: Joi.number().required(),
    restaurant_id: Joi.number().required(),
  });
  return schema.validate(data);
};
module.exports = { reservationValidation };
