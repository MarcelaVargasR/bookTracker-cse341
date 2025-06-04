const { Router } = require("express"); //destrocturing router from express
const router = new Router();

const booksRouter = require("./books");
const userRouter = require("./users");
const swaggerRouter = require("./swagger");
const authRouter = require("./auth");

router.use("/books", booksRouter);
router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/", swaggerRouter);

module.exports = router;
