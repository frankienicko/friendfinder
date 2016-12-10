// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var friends = [
  {
    lunch: "Beet & Goat Cheese Salad with minestrone soup."
  }, {
    lunch: "Pizza, two double veggie burgers, fries with a big glup"
  }
];

// Routes
app.get("/weekday", function(req, res) {
  res.render("index", friends[0]);
});

app.get("/weekend", function(req, res) {
  res.render("index", friends[1]);
});

app.get("/friends", function(req, res) {
  res.render("all-friends", {
    name: friends,
    profile: "david"
  });
});

// Initiate the listener.
app.listen(port);
