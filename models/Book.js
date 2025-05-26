const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  description: {
    type: String,
  },
});

const Book = model("Book", bookSchema);

module.exports = { Book };
