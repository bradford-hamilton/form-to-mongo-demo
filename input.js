var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//input Schema
var inputSchema = new Schema({
  text: String
});

var Input = mongoose.model('Input', inputSchema);

module.exports = Input;
