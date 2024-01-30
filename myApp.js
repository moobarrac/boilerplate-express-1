let express = require("express");
let app = express();

const publicPath = __dirname + "/public";
const filePath = __dirname + "/views/index.html";
app.use(express.static(publicPath));
app.get("/", function (req, res) {
  res.sendFile(filePath);
});

module.exports = app;
