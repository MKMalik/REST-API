var express = require('express');
var todoController = require('./controllers/todo-controller');
const cors = require('cors');

var app = express();

//Middleware
app.use(cors())

todoController(app);

const port = 3000;
const ip = '192.168.43.4';

app.listen(port, ip, () => {
    console.log(`Server started listening at ${ip}:${port}`);
});

