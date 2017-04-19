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

const tableSchema = new Schema({
  Name: String,
  Time: String,
  Guest_Count: Number,
  allergies: String,
  spc_accommodations: String,
  TableID: Number,
});

const Reservation = mongoose.model('Reservation', tableSchema);


app.post('/reservation', (req, res) => {
  console.log(req.body, 'THE BODY')
  const rezzy = new Reservation({
    Name: req.body.name,
    Time: req.body.time,
    Guest_Count: req.body.count,
    allergies: req.body.allergy,
    spc_accommodations: req.body.spc_accommodations,
    TableID: req.body.tableID,
  }).save((err, result) => {
      if (err) {
        return console.log(err);
      }
    console.log('saved to data base, BEEP BEEP');
    res.redirect('/');
  });
});

app.get('/reservation', (req, res) => {
  var q = req.query.guest;
  console.log(q, "looking for this")
  Reservation
    .find({Name:q}, function(err, data){
      console.log(data, "THIS IS OUR DATA")
      res.send(data);
    })
});

app.delete('/cancel', (req, res) => {
  var q = req.query.guest;
  console.log(q, "looking for this")
  Reservation
    .remove({Name:q}, function(err, data){
      console.log(data, "THIS IS OUR DATA")
      res.send(data);
    })
});

app.put('/edit', (req, res) => {
  var q = req.query.guest;
  console.log(q, "looking for this")
  Reservation
    .remove({Name:q}, function(err, data){
      console.log(data, "THIS IS OUR DATA")
      res.send(data);
    })
});


app.get(`/api/reservations`, (req, res) => {
  Reservation
    .find({}, function(err, data){
      // console.log(data, "THIS IS OUR DATA")
      res.send(data);
    })
})

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/client/index.html`);
});

module.exports = db, app;
