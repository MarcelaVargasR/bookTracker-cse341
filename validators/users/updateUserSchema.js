const joi = require("joi");

const updateUserSchema = joi.object({
  name: joi.string().trim().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
});

module.exports = { updateUserSchema };
