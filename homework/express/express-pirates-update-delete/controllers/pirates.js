//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});


//==============================
// CREATE
//==============================
router.get('/:id/edit', (req, res) => {
  const id = req.params.id;
  const todo = data.seededTodos[id];
  res.render("pirates/edit", {
    todo: todo,
    id: id
  })
});
//==============================
// UPDATE
//==============================
router.put('/:id', (req, res) => {
  // We have the ID
  const id = req.params.id;
  // Use the id to grab specific index in array
  const todo = data.modules[id];
  // Update the description and urgent values
  todo.description = req.body.description;
  todo.urgent = req.body.urgent;
  // redirect back to individual pirates
  res.method = "GET";
  res.redirect(`/pirates/${id}`);
});
//==============================
// DESTROY
//==============================
router.delete('/:id', (req, res) => {
  data.models.splice(req.params.id, 1);

  res.method= "GET";
  res.redirect("/pirates");
});

//==============================
// EXPORTS
//==============================

module.exports = router;
