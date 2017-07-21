/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
const bodyParser = require('body-parser');
/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
/* set up the application params*/
//const TodosController = require('./controllers/todos')

//controllers for `/pirates` resource
const pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);

// log
app.use( logger('dev'));

 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());

/*Views*/
app.set('view engine', 'hbs');
//app.use('/todos', TodosCOntroller)

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page!');
});



// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready for some hot Pirate action on port', port,"//", new Date());
});//your code here
