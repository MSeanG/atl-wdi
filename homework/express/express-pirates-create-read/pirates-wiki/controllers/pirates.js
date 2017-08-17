//your code below
//requirements
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//all routes for /pirate
//router.get(.......)
//router.post(......)
//....etc
/* INDEX */
router.get('/',(req,res)=>{
    res.send('This is our Home Page');
    res.render('pirates/index',{
//        pirates: data.
    });
});
/* new */
router.get('/new',(req,res)=>{
    res.render('/pirates/new');
});
router.get('/:id',(req,res)=>{
//    const id = req.params.id;
});
router.post('/',(req,res)=>{
    res.send('new pirate post request')
});
//exports
module.exports = router;