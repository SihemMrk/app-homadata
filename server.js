var express = require("express");

var env = process.env.NODE_ENV || "development";

var app = express();

app.set("views", __dirname + "/server/views");

app.set("view engine", "jade");

app.use(express.static(__dirname + "/public"));

app.get("*", function(req, res) {
  res.render("index");
});

app.get("/partials/:partialPath", function(req, res) {
  res.render("partials/" + req.params.partialPath);
});

var port = 3030;
app.listen(port);
console.log("Listening on port  " + port);
