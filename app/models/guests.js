var db = require('../config');
var mongoose = require(mongoose);

var tableSchema = mongoose.Schema({
  Time: Number,
  Guest_Count: Number,
  allergies: String,
  spc_accommodations: String
})

var Table = mongoose.model('Table', tableSchema);

module.exports = Table;
