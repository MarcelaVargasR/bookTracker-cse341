const joi = require("joi");

const createBookSchema = joi.object({
  title: joi.string().required(),
  author: joi.string().required(),
  genre: joi.string().required(),
  publishedDate: joi.date().format("YYYY-MM-DD"),
  status: joi.string().valid("read", "reading", "to-read").optional().messages({
    "any.only": "Status must be one of: read, reading, to-read",
  }),
  rating: joi.number().min(0).max(5).required(),
  description: joi.string().required(),
});



module.exports = { createBookSchema };
