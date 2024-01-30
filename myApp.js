let express = require("express");
let app = express();

const filePath = __dirname + "/views/index.html";
app.get("/", function (req, res) {
  res.sendFile(filePath);
});

module.exports = app;
