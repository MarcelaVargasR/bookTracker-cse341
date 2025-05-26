function createBook(req, res) {
  const body = req.body;
  res.json({
    _id: "1234",
    title: "titi.......",
  });
}

function getBooks(req, res) {
  res.json([
    {
      _id: "1234",
      title: "titi",
    },
  ]);
}

function getBookById(req, res) {
  const bookId = req.params.id;
  console.log(bookId);
  res.json({
    _id: "1234",
    title: "cocacola",
  });
}

function updateBookById(req, res) {
  const bookId = req.params.id;
  const body = req.body;
  console.log(bookId, body);
  res.json({
    _id: "1234",
    title: "titi",
  });
}

function deleteBookById(req, res) {
  const bookId = req.params.id;
  res.json({
    _id: "1234",
    title: "titi",
  });
}

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
