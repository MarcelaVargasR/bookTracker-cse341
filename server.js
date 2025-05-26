const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/database");
const router = require('./routes')

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.use("/", router)

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server runningo on port ${port}`);
});
