const joi = require("joi");

const createUserSchema = joi.object({
  name: joi.string().trim().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  
});

module.exports = { createUserSchema };
