//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
var express = require('express');
var router = express.Router();

var Donut = require("../models/donut");

//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', (request, response) => {
    Donut.find({})
        .then((donuts) => {
            response.render(
                'donuts/index',
                { donuts }
            );
        })
        .catch((error) => {
            console.log('Error retrieving donuts from database!');
            console.log(error);
        });
})


//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form
router.get('/new', (request, response) => {
    response.render('donuts/new');
});



//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
router.get('/:id', (request, response) => {
    const donutIdToSearchDbFor = request.params.id;

    Donut.findById(donutIdToSearchDbFor)
        .then((donut) => {
            response.render(
                'donuts/show',
                { donut }
            );
        })
        .catch((error) => {
            console.log(`Error retrieving donut with ID of ${donutIdToSearchDbFor}`)
        });
});



//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"
router.post('/', (request, response) => {
    
        const newDonutInfoFromForm = request.body;
    
    
        Donut.create(newDonutInfoFromForm)
            .then((donut) => {
                response.render(
                    'donuts/show',
                    { donut }
                )
            })
            .catch((error) => {
                console.log('Error saving new donut to database!');
                console.log(error);
            });


//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it



//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)



//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"



//======================
// EXPORTS
//======================
// export router with module.exports
