const env = require("dotenv");
env.config();
const express = require("express");
const app = express();
const db = require("./config/mongoose"); // connect to db
const bodyParser = require("body-parser");

app.use(bodyParser());

app.use("/api", require("./routes"));
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("server up and running on port:" + process.env.PORT);
});
