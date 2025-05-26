function createUser(req, res) {
  const user = req.body;
  res.json({
    _id: "1234",
    firstName: "Jhon",
  });
}

function getUser(req, res) {
  res.json([
    {
      _id: "1234",
      firstName: "Jhon",
    },
  ]);
}

function getUserById(req, res) {
  const userId = req.params.id;
  res.json({
    _id: "1234",
    firstName: "Jhon",
  });
}

function updateUserById(req, res) {
  const userId = req.params.id;
  const user = req.body;
  res.json({
    _id: "1234",
    firstName: "Jhon",
  });
}

function deleteUserById(req, res) {
  const userId = req.params.id;
  res.json({
    _id: "1234",
    firstName: "Jhon",
  });
}

module.exports = {
  createUser,
  getUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
