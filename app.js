var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Input = require('./input.js');
var bodyParser = require('body-parser');

// Connect to local mongo db. Default db: test
mongoose.connect('mongodb://localhost');

// Use express.static to serve pages
app.use(express.static(__dirname + '/public'));

// Use bodyParser to parse post requests
app.use( bodyParser.urlencoded({ extended: false }) );

// Route for get requests to root
app.get('/', function(request, response) {
  response.sendFile('index');
});

// Post request that saves form info to mongodb
app.post('/', function(request, response) {
  var newText = new Input({ text: request.body.text });
  newText.save(function(err) {
    if (err) { throw err; }
  });
});

// Express listen to port 1337
app.listen(1337);
console.log('listening on port 1337');
