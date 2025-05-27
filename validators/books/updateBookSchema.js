const joi = require("joi");

const updateBookSchema = joi.object({
  title: joi.string().required(),
  author: joi.string().required(),
  genre: joi.string().required(),
  publishedDate: joi.date().iso().required(),
  status: joi.string().valid("read", "reading", "to-read").optional().messages({
    "any.only": "Status must be one of: read, reading, to-read",
  }),
  rating: joi.number().min(0).max(5).required(),
  description: joi.string().required(),
});

module.exports = { updateBookSchema };
