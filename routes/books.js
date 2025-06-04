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

router.route("/").post(validateData(createBookSchema), createBook);
router.route("/").get(getBooks);
router.route("/:id").get(getBookById);
router.route("/:id").put(validateData(updateBookSchema), updateBookById);
router.route("/:id").delete(deleteBookById);


module.exports = router;
