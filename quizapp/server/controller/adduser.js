const express = require("express");
const router = express.Router();
const mongoDB = require("../model/mongose");
router.post("/", (req, res) => {
  mongoDB
    .scheme()
    .insertMany([req.body])
    .then(() => {
      console.log("Successfully insert");
      res.json({ message: "Successfully insert" });
    });
});
router.get("/", (req, res) => {
  res.send("Hello World");
});
module.exports = router;
