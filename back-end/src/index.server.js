const env = require("dotenv");
env.config();
const express = require("express");
const app = express();
const db = require("./config/mongoose"); // connect to db
const bodyParser = require("body-parser");

//setting up the cors

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );

  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/api", require("./routes"));
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("server up and running on port:" + process.env.PORT);
});
