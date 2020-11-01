var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var os = require('os');

var urlencodedParser = bodyParser.urlencoded({entended: false});

mongoose.connect('mongodb://localhost:27017/todo-app?retryWrites=true&w=majority', function(err) {
     if (err) { throw err;  console.log('DB Connection problem');}
     console.log('DB Connected!');
});

//create schema
var todoSchema = new mongoose.Schema({
    item: String,
    timeStamp: String,
});

var Todo = mongoose.model('Todo', todoSchema); //2nd todo, collection name
const todo = new Todo();


module.exports = function (app) {
    app.get('/api', (req, res) => {
        const data = Todo.find({}, (err, docs) => {
            res.json(docs);
        });
    });

    app.post('/api', urlencodedParser, (req, res) => {
        Todo(req.body).save(function(err, data) {
            if (err) throw err;
        });
    });
}