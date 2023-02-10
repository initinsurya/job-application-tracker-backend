const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const connectDB = require("./config/db");

const app = express();

app.use(express.json());

dotenv.config({ path: "./config/config.env" });

connectDB();

var cors = require("cors");

app.use(cors()); // Use this after the variable declaration

const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const router = require("./routes/router.js");
app.use("/jat", router);

app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`error: ${err.message}`);
  //server.close(() => process.exit(1));
});
