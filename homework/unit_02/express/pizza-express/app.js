// app.js

//require express package
var express = require('express');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3000;

var hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views');

// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});

app.get('/', function(req, res, next) {
    res.send('Welcome to Pizza Express!');
});
app.get('/topping/:type', function(req, res, next) {
    var type = 'pepperoni';
    res.send(`Topping ${type}`);
});
 app.get('/order/:amount/:size', function(req, res, next) {
    var amount = '10';
    var size = 'medium';
    res.send(`Your order for ${amount} ${size} pizzas will be ready in 1 minute!`);
 });
//app.get('/favorite-foods', function(req, res) {
//    var favoriteFoods = ["Jeni's almond butter brittle ice cream", 'Tacos from Superica', 'a breakfast sandwich from Gjelina to go in Venice', 'Croissants from Bottega Louie in downtown Los Angeles', 'Pizza from Little Star in San Francisco'];
//    
//    res.render('favorite-foods', {
//        data: favoriteFoods
//    });
//});