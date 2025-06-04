const { Router } = require("express"); //destrocturing router from express
const router = new Router();
const { login, register, logout } = require("../controllers/auth");
const { validateData } = require("../midlewares/validator");
const { loginSchema } = require("../validators/auth/loginSchema");
const { registerSchema } = require("../validators/auth/registerSchema");

router.route("/login").post(validateData(loginSchema), login);
router.route("/register").post(validateData(registerSchema), register);
router.route("/logout").post(logout);

module.exports = router;
