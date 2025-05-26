function createBook(req, res) {
  res.json({
    _id: "1234",
    title: "titi",
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

module.exports = {
  createBook,
  getBooks,
};
