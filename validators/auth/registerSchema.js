const joi = require("joi");

const registerSchema = joi.object({
  email: joi.string().required(),
  name: joi.string().required(),
  lastName: joi.string().required(),
  password: joi.string().required(),
});

module.exports = { registerSchema };
