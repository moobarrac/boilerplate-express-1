let express = require("express");
let bodyParser = require("body-parser");
let app = express();

const publicPath = __dirname + "/public";
const filePath = __dirname + "/views/index.html";

app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});
app.use("/public", express.static(publicPath));

app.get("/", function (req, res) {
  res.sendFile(filePath);
});

app.get("/json", (req, res) => {
  const myMessageSecret = process.env["MESSAGE_STYLE"];
  const message = myMessageSecret === "uppercase" ? "HELLO JSON" : "Hello json";
  res.json({ message });
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  },
);

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({ echo: word });
});

app.route("/name").get((req, res) => {
  const { first, last } = req.query;
  res.json({ name: `${first} ${last}` });
});

module.exports = app;
