var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./app/app.js")(app);
var storage = require("./storage/index.js")

var server = app.listen(3000, function () {
    console.log("Listening on port %s...");
});