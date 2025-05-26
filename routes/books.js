const { Router } = require("express"); //destrocturing router from express
const router = new Router();
const { createBook, getBooks } = require("../controllers/books");

router.route("/").post(createBook);
router.route("/").get(getBooks);

module.exports = router;
