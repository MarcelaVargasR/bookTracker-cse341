const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./database/database");
const router = require("./routes");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");

dotenv.config();
connectDB();

const port = process.env.PORT || 3001;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/", router);

app.listen(port, () => {
  console.log(`server runningo on port ${port}`);
});
