const express = require('express'),
    bodyParser = require('body-parser'),
    // In order to use PUT HTTP verb to edit item
    methodOverride = require('method-override'),
    // Mitigate XSS using sanitizer
    sanitizer = require('sanitizer'),
    app = express(),
    port = 8000; // Added semicolon here

app.use(bodyParser.urlencoded({
    extended: false
}));

// https://github.com/expressjs/method-override#custom-logic
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // Look in urlencoded POST bodies and delete the _method field
        let method = req.body._method;
        delete req.body._method;
        return method; // Return the method from the body
    }
}));

let todolist = [];

/* The to do list and the form are displayed */
app.get('/todo', function (req, res) {
    res.render('todo.ejs', {
        todolist,
        clickHandler: "func1();"
    });
})

/* Adding an item to the to do list */
.post('/todo/add/', function (req, res) {
    // Escapes HTML special characters in attribute values as HTML entities
    let newTodo = sanitizer.escape(req.body.newtodo);
    if (req.body.newtodo !== '') {
        todolist.push(newTodo);  // Add new todo item
    }
    res.redirect('/todo');  // Redirect to the todo list page
})

/* Deletes an item from the to do list */
.get('/todo/delete/:id', function (req, res) {
    if (req.params.id !== '') {
        todolist.splice(req.params.id, 1);  // Remove item from todolist by id
    }
    res.redirect('/todo');  // Redirect to the todo list page
})

// Get a single todo item and render the edit page
.get('/todo/:id', function (req, res) {
    let todoIdx = req.params.id;
    let todo = todolist[todoIdx];

    if (todo) {
        res.render('edititem.ejs', {
            todoIdx,
            todo,
            clickHandler: "func1();"
        });
    } else {
        res.redirect('/todo');  // Redirect if the item doesn't exist
    }
})

// Edit item in the todo list
.put('/todo/edit/:id', function (req, res) {
    let todoIdx = req.params.id;
    // Escapes HTML special characters in attribute values as HTML entities
    let editTodo = sanitizer.escape(req.body.editTodo);
    if (todoIdx !== '' && editTodo !== '') {
        todolist[todoIdx] = editTodo;  // Update todo item
    }
    res.redirect('/todo');  // Redirect to the todo list page
})

/* Redirects to the todo list if the page requested is not found */
.use(function (req, res) {
    res.redirect('/todo');  // Redirect to todo list if route not found
})

// Start the server and listen on the specified port
.listen(port, function () {
    console.log(`Todolist running on http://0.0.0.0:${port}`);  // Log server info
});

// Export app for testing
module.exports = app;
