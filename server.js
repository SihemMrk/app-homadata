var express = require("express");
var env = process.env.NODE_ENV || "development";
var app = express();
var bodyParser = require("body-parser");

app.set("views", __dirname + "/server/views");

app.set("view engine", "jade");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/partials/:partialPath", function(req, res) {
  res.render("partials/" + req.params.partialPath);
});

app.get("*", function(req, res) {
  res.render("index");
});

app.post("/data", function(req, res) {
  const datas = req.body;
  const surface = parseFloat(datas.surface);
  const pieces = parseFloat(datas.pieces);
  const prix = parseFloat(datas.prix);
  const etat = datas.etat;
  const name = datas.name;

  var totalPrice = surface * prix;

  if (pieces <= 2) {
    totalPrice = totalPrice * 1.05;
  } else if (pieces === 3 || pieces === 4) {
    totalPrice = totalPrice * 1.02;
  } else {
    totalPrice = totalPrice * 0.99;
  }

  if (name === "Maison") {
    totalPrice = totalPrice * 1.03;
  } else if (name === "Appartement") {
    totalPrice = totalPrice * 1.05;
  }

  if (etat === "Nécessite des travaux") {
    totalPrice = totalPrice * 0.9;
  } else if (etat === "Refait à neuf") {
    totalPrice = totalPrice * 1.12;
  }

  res.json(totalPrice);
});
var port = 3030;
app.listen(port);
console.log("Listening on port  " + port);
