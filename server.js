const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const route = require("./routes");

dotenv.config();

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const app = express();
app.use(bodyParser.json());
app.use("/api", route);

app.listen(PORT, () => {
  console.log(`Connected to server at port : ${PORT}`);
});
