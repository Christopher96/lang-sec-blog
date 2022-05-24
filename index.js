// Defines required modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");

// Get express and the router
const app = express();
const router = express.Router();

// Set host and port to environment variables or default values
const host = process.env.HOST || "localhost";
const port = process.env.PORT || "8080";

// Parse json responses and allow requests from any domain
app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
// Log server messages
// app.use(morgan("dev"));

app.use("/", express.static("public"));
app.use("/api", require("./api"));

// Listen the server
app.listen(port, host);
app.on("listening", function () {
  console.log(
    "Express server started on port %s at %s",
    server.address().port,
    server.address().address
  );
});

// Exit properly on CTRL-C
process.on("SIGINT", () => {
  process.exit();
});
