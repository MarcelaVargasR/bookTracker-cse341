const { Router } = require("express"); //destrocturing router from express
const router = new Router();
const { createUser, getUser, getUserById, updateUserById, deleteUserById} = require("../controllers/users");

router.route("/").post(createUser);
router.route("/").get(getUser);
router.route("/:id").get(getUserById);
router.route("/:id").put(updateUserById);
router.route("/:id").delete(deleteUserById); 

module.exports = router;