// Gets express router
const xss = require("xss");
const express = require("express");
const router = express.Router();
const path = require("path");

let latestPost = null;

const myxss = new xss.FilterXSS({
    whiteList: {
        h1: [],
        span: [],
        b: [],
    },
});

router.post("/create", (req, res) => {
    const data = JSON.parse(req.body.data);
    console.log(data);
    const filtered = {title: myxss.process(data.title), body: myxss.process(data.body)};
    console.log(filtered);
    latestPost = filtered;

    return res.status(200).send();
});

router.get("/latest", (req, res) => {
    return res.status(200).json(latestPost);
});

router.get("/", (req, res) => {
    console.log("hello");
});

module.exports = router;
