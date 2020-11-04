var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: true});

mongoose.connect('mongodb://localhost:27017/todo-app', function(err) {
     if (err) { throw err;  console.log('DB Connection problem');}
     console.log('DB Connected!');
});

//create schema
var todoSchema = new mongoose.Schema({
    item: {
        type: String,
        minlength: 1,
        required: true,
    },
    timeStamp: String,
});

var Todo = mongoose.model('Todo', todoSchema); //2nd todo, collection name


module.exports = function (app) {

    app.get('/api', async (req, res) => {
        try {
            await Todo.find({}, (err, docs) => {
                res.json(docs);
            });
        } catch (error) {
            res.json({message: error});
        }
    });

    app.post('/api', jsonParser, async (req, res) => {
        console.log(req.body);
        try {
            await Todo(req.body).save(function(err, doc) {
                console.log(doc);
                res.send('success');
            });
        } catch (error) {
            res.json({message: error});
        }
    });

    // app.use(jsonParser);
}
