const { Router } = require("express"); //destrocturing router from express
const router = new Router();
const { login, register, logout } = require("../controllers/auth");
const { validateData } = require("../midlewares/validator");
const { loginSchema } = require("../validators/auth/loginSchema");
const { registerSchema } = require("../validators/auth/registerSchema");
const passport = require("passport");

router
  .route("/github/callback")
  .get(passport.authenticate("github"), (req, res) => {
    console.log("req.session", req);
    req.session.user = req.user;
    res.redirect("/");
  });


router.route("/login").get(passport.authenticate("github"));
router.route("/register").post(validateData(registerSchema), register);
router.route("/logout").post(logout);

module.exports = router;
