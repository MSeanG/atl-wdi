const express = require('express');
const router = express.Router();
const data = require('../data')
/* INDEX TODOS */
router.get('/', function(req,res) {
  res.render('todos/index', {
    todos: data.seededTodos
  });
});
/* new todo */
router.get('/new', (req,res)=>{
    res.render('todos/new', {});
});
/* show todo */
router.get('/:id', (req,res)=>{
    const id = req.params.id;
    const todo = data.seededTodos[id];
    res.render('todos/show', {
        todo: todo
    });
});
router.post('/',(req,res)=>{
    const newTodo = {
    desription: req.body.urgent,
    urgent: req.body.urgent
    };
    data.seededTodos.push(newTodo);
    res.redirect("/todos");
})
module.exports = router;