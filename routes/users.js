const { Router } = require("express"); //destrocturing router from express
const router = new Router();
const { createUser, getUser, getUserById, updateUserById, deleteUserById} = require("../controllers/users");
const { validateData } = require("../midlewares/validator");
const {createUserSchema} = require("../validators/users/createUserSchema")
const {updateUserSchema} = require("../validators/users/updateUserSchema")

router.route("/").post(validateData(createUserSchema), createUser);
router.route("/").get(getUser);
router.route("/:id").get(getUserById);
router.route("/:id").put(validateData(updateUserSchema), updateUserById);
router.route("/:id").delete(deleteUserById); 

module.exports = router;