// Gets express router
const express = require("express");
const router = express.Router();
const path = require("path");

router.post("/create", (req, res) => {
    const data = req.body;
    console.log(data);
    return res.status(200).send();
});

router.get("/", (req, res) => {
    console.log("hello");
});

module.exports = router;
