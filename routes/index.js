const { Router } = require("express"); //destrocturing router from express
const router = new Router();
const booksRouter = require("./books");
const userRouter = require("./users");

router.use("/books", booksRouter);
router.use("/users", userRouter);

module.exports = router;
