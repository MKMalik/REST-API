var express = require('express');
var todoController = require('./controllers/todo-controller');

var app = express();

todoController(app);

const port = 5500;
const ip = 'localhost';

app.listen(port, ip, () => {
    console.log(`Server started listening at ${ip}:${port}`);
});

