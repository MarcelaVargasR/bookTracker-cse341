const { Router } = require("express"); //destrocturing router from express
const router = new Router();
const passport = require("passport");

router
  .route("/github/callback")
  .get(passport.authenticate("github"), (req, res) => {
    console.log("req.session", req);
    req.session.user = req.user;
    res.redirect("/");
  });


router.route("/login").get(passport.authenticate("github"));

module.exports = router;
