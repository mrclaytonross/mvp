const mongoose = require('mongoose');

const tableSchema = new Schema({
  Name: String,
  Time: Number,
  Guest_Count: Number,
  allergies: String,
  spc_accommodations: String,
});

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;
