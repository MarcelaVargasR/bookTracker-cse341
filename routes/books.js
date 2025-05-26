const { Router } = require("express"); //destrocturing router from express
const router = new Router();
const { createBook, getBooks, getBookById, updateBookById, deleteBookById } = require("../controllers/books");

router.route("/").post(createBook);
router.route("/").get(getBooks);
router.route("/:id").get(getBookById);
router.route("/:id").put(updateBookById);
router.route("/:id").delete(deleteBookById); 

module.exports = router;
