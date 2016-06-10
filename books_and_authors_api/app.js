var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


// var db;
// if(process.env.ENV == "Test"){
  db = mongoose.connect('mongodb://localhost/bookAPI');
// }
// else{
//   db = mongoose.connect('mongodb://localhost/bookAPI_test');
// }

var Book = require('./models/bookModel');

var app = express();
var port = process.env.PORT ||3000;


bookRouter = require("./Routes/bookRoutes")(Book);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/books', bookRouter);
// app.use('/api/authors', authorRouter);



app.get('/', function(req, res){
    res.send('welcome to my API!');
});

app.listen(port, function(){
    console.log('Gulp is running my app on  PORT: ' + port);
});

module.exports = app;