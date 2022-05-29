const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const route = require("./routes");

dotenv.config();

const PORT = process.env.PORT || 4000;
const JWT_SECRET = "sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk";

mongoose.connect(
  "mongodb+srv://vulongpt:vulongpt@cluster0.utibo.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

const app = express();
app.use(bodyParser.json());
app.use("/api", route);

app.listen(PORT, () => {
  console.log(`Connected to server at port : ${PORT}`);
});
