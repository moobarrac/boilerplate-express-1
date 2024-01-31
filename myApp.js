let express = require("express");
let app = express();

const publicPath = __dirname + "/public";
const filePath = __dirname + "/views/index.html";
const myMessageSecret = process.env["MESSAGE_STYLE"];
const message = myMessageSecret === "uppercase" ? "HELLO JSON" : "Hello json";
app.use("/public", express.static(publicPath));
app.get("/", function (req, res) {
  res.sendFile(filePath);
});
app.get("/json", (req, res) => {
  res.json({ message });
});

module.exports = app;
