var express = require('express');
var burger = require('../models/burger.js');


var router = express.Router();

// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

router.get('/', function(req,res){
   
  burger.view(function(err,result){
    if(err) console.log("ERROR : " + err);
    var burgers = [];
    var eatenBurgers = []
    for(var i = 0; i< result.length;i++){
      if(result[i].devoured === 0){
        burgers.push(result[i]);
      }else {
        eatenBurgers.push(result[i])
      }
    }
    res.render('index', {
      burgers: burgers,
      eatenBurgers : eatenBurgers
    });
  });

});


router.post('/newBurger', function(req,res){
  burger.new(req.body.name, function(err,results){
    if(err) console.log("ERROR : " + err);
      res.json(results)
  });

});

router.put("/update/:id", function(req,res){

  burger.update(req.params.id,req.body.toggle, function(err,results){
    if(err) {
      return res.status(500).end();
    }else if(results.changedRows === 0) {
      return res.status(400).end();
    } 
    res.status(200).end();
  });
});




module.exports = router;