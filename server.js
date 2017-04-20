/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

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
  })
  

  rezzy.save((err, result) => {
      if (err) {
        return console.log(err);
      }
    console.log('saved to data base, BEEP BEEP');
    res.redirect('/books#/books');
  });
});

app.get('/reservation', (req, res) => {
  const q = req.query.guest;
  Reservation
    .find({ Name: q }, (err, data) => {
      if (err) {
        console.error('there was an error', err);
        res.send(err);
      }
      res.send(data);
    });
});

app.delete('/cancel', (req, res) => {
  const q = req.query.guest;
  console.log(q, 'this is guest');
  Reservation
    .remove({ Name: q }, (err, data) => {
      res.send(data);
    });
});
//
// app.post('/update', (req, res) => {
//   console.log('inside update', req.body)
//   const q = req.body.name;
//   Reservation
//     .remove({ Name: q }, (err, data) => {
//       res.send(data);
//     });
//   Reservation
//     .findOneAndUpdate({ Name: q }, { $set: req.body }, { new: true }, (err, data) => {
//       console.log('inside update');
//       if (err) {
//         console.error(err, 'this is error in update');
//         res.send(err, 'there was an error processing your request');
//       }
//       console.warn('Update Success: ', data);
//       res.send(data);
//     });
// });
app.post('/update', (req, res) => {
  console.log('inside update', req.body)
  const q = req.body.Name;
  console.log(q, 'clay this is q');
  Reservation
    .findOneAndUpdate({ Name: q }, { $set: req.body },  {upsert: true, new: true, runValidators: true}, (err, data) => {
      console.log('inside update');
      if (err) {
        console.error(err, 'this is error in update');
        res.send(err, 'there was an error processing your request');
      }
      console.warn('Update Success: ', data);
      res.redirect('#/books');
    });
});


app.get('/api/reservations', (req, res) => {
  Reservation
    .find({}, (err, data) => {
      res.send(data);
    });
});

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/client/index.html`);
});

module.exports = db, app;
