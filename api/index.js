// Gets express router
const express = require("express");
const router = express.Router();
const path = require("path");

let latestPost = null;

router.post("/create", (req, res) => {
  const data = req.body.data;
  latestPost = JSON.parse(data);
  return res.status(200).send();
});

router.get("/latest", (req, res) => {
  return res.status(200).json(latestPost);
});

router.get("/", (req, res) => {
  console.log("hello");
});

module.exports = router;
