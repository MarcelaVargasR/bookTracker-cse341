const { User } = require("../models/User");

async function createUser(req, res) {
  try {
    const body = req.body;

    const newUser = await new User({
      name: body.name,
      lastName: body.lastName,
      email: body.email,
    }).save();

    res.json(newUser);
  } catch (error) {
    //error handling
    console.error(error);
    res.status(404).json({
      message: "Unable to create user",
    });
  }
}

async function getUser(req, res) {
  const users = await User.find();
  res.json(users);
}

async function getUserById(req, res) {
  const userId = req.params.id;

  try {
    const userById = await User.findOne({ _id: userId });
    res.json(userById);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "User not found",
    });
  }
}

async function updateUserById(req, res) {
  const userId = req.params.id;
  const user = req.body;

  try {
    const userUpdate = await User.findByIdAndUpdate(userId, user, {
      new: true,
    });

    res.json(userUpdate);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "Unable to update user",
    });
  }
}

async function deleteUserById(req, res) {
  const userId = req.params.id;

  try {
    const userDelete = await User.deleteOne({ _id: userId });

    res.json(userDelete);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "Unable to delete user",
    });
  }
}

module.exports = {
  createUser,
  getUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
