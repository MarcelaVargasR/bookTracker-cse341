const { Router } = require("express"); //destrocturing router from express
const router = new Router();


const booksRouter = require("./books");
const userRouter = require("./users");
const swaggerRouter = require("./swagger");

router.use("/books", booksRouter);
router.use("/users", userRouter);
router.use('/', swaggerRouter); 

module.exports = router;
