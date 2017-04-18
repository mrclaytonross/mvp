const express = require('express');
const env = require('dotenv').config();
const PORT = process.env.PORT;
const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const Schema = mongoose.Schema;
var db;

// app.use(express.static(`${__dirname}/views`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/client')));

mongoose.connect(process.env.MONGODB,(err, database) => {
  if(err) {
    return console.log(err);
  }
  db = mongoose.connection;
  app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
  })
})

module.exports = db;
