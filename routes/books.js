const { Router } = require("express"); //destrocturing router from express
const router = new Router();
const {
  createBook,
  getBooks,
  getBookById,
  updateBookById,
  deleteBookById,
} = require("../controllers/books");
const { validateData } = require("../midlewares/validator");
const { createBookSchema } = require("../validators/books/createBookSchema");
const {updateBookSchema} = require("../validators/books/updateBookSchema");
const { isAuthenticated } = require("../midlewares/isAuthenticated");

router.route("/").post(isAuthenticated, validateData(createBookSchema), createBook);
router.route("/").get(isAuthenticated, getBooks);
router.route("/:id").get(getBookById);
router.route("/:id").put(isAuthenticated, validateData(updateBookSchema), updateBookById);
router.route("/:id").delete(isAuthenticated, deleteBookById);


module.exports = router;
