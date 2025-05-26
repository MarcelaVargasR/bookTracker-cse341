const { Book } = require("../models/Book");

async function createBook(req, res) {
  try {
    const body = req.body;

    const newBook = await new Book({
      title: body.title,
      author: body.author,
      genre: body.genre,
      publishedDate: new Date(body.publishedDate),
      status: body.status,
      rating: body.rating,
      description: body.description,
    }).save(); //retorn a promise

    res.json(newBook);
  } catch (error) {
    //error handling
    console.error(error);
    res.status(404).json({
      message: "Unable to create user",
    });
  }
}

async function getBooks(req, res) {
  const books = await Book.find();
  res.json(books);
}

async function getBookById(req, res) {
  const bookId = req.params.id;

  try {
    const bookById = await Book.findOne({ _id: bookId });
    res.json(bookById);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "Book not found",
    });
  }
}

async function updateBookById(req, res) {
  const bookId = req.params.id;
  const body = req.body;

  try {
    const bookUpdate = await Book.findByIdAndUpdate(bookId, body, {
      new: true,
    });

    res.json(bookUpdate);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "Unable to update book",
    });
  }
}

async function deleteBookById(req, res) {
  const bookId = req.params.id;

  try {
    const bookDelete = await Book.deleteOne({ _id: bookId });
    res.json(bookDelete);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "Unable to delete book",
    });
  }
}

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
