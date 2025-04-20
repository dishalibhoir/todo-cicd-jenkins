const express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    sanitizer = require('sanitizer'),
    app = express(),
    port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));

// Handle methodOverride for PUT and DELETE
app.use(methodOverride(function (req) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        let method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

let todolist = [];

// Display to-do list
app.get('/todo', function (req, res) {
    res.render('todo.ejs', { todolist, clickHandler: "func1();" });
});

// Add item to to-do list
app.post('/todo/add/', function (req, res) {
    let newTodo = sanitizer.escape(req.body.newtodo);
    if (newTodo.trim() !== '') {
        todolist.push(newTodo);
    }
    res.redirect('/todo');
});

// Delete item from to-do list
app.get('/todo/delete/:id', function (req, res) {
    if (req.params.id !== '') {
        todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
});

// Edit item in the to-do list
app.get('/todo/:id', function (req, res) {
    let todoIdx = req.params.id;
    let todo = todolist[todoIdx];

    if (todo) {
        res.render('edititem.ejs', { todoIdx, todo, clickHandler: "func1();" });
    } else {
        res.redirect('/todo');
    }
});

// Update item in the to-do list
app.put('/todo/edit/:id', function (req, res) {
    let todoIdx = req.params.id;
    let editTodo = sanitizer.escape(req.body.editTodo);
    if (todoIdx !== '' && editTodo !== '') {
        todolist[todoIdx] = editTodo;
    }
    res.redirect('/todo');
});

// Catch-all for undefined routes
app.use(function (req, res) {
    res.redirect('/todo');
});

app.listen(port, function () {
    console.log(`Todolist running on http://0.0.0.0:${port}`);
});

// Export app
module.exports = app;
