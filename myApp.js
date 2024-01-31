let express = require("express");
let app = express();

const publicPath = __dirname + "/public";
const filePath = __dirname + "/views/index.html";
app.use("/public", express.static(publicPath));
app.get("/", function (req, res) {
  res.sendFile(filePath);
});
app.get("/json", (req, res) => {
  res.json({
    message: "Hello json",
  });
});

module.exports = app;
