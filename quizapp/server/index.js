const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoDB = require("./model/mongose");
const test = require("./controller/adduser");
const app = express();
const POST = 27017;
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.get("/", (req, res) => {
  res.send("Hello World OK 1000002000");
});
app.listen(POST, () => {
  console.log("Server running on post", POST);
  mongoDB.connect("mongodb://127.0.0.1:27017/quizapp");
});
app.use("/test", test);
app.use("/api/user", test);
