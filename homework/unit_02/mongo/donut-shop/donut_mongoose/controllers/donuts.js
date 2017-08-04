//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
const express = require('express');

const Donut = require('../models/donuts');

const router = express.Router({ mergeParams: true });

//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', (request, response) => {
    const donutIdToFind = request.params.donutId;

    User.findById(donutIdToFind)
        .then((donuts) => {
            response.render(
                'donuts/index',
                {
                    userId: user._id,
                    userName: user.first_name,
                    items: user.items
                }
            )
        })
});


//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form



//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page




//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"



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
