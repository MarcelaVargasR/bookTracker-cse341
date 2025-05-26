const { Router } = require("express"); //destrocturing router from express
const router = new Router();
const booksRouter = require("./books");

router.use("/books", booksRouter);

module.exports = router;
