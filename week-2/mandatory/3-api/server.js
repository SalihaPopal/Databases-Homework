const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { Pool }  = require("pg");



app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
