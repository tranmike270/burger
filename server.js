var express = require('express');
var bodyParser = require('body-parser');
var burgController = require('./controllers/burgers_controller.js');



// Create an instance of the express app.
var app = express();

//Path to use files in public folder
app.use(express.static("public"));


// configure body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Using our route
app.use('/', burgController);

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });