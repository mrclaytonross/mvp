const env = require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();

var db;



app.use(bodyParser.urlencoded({extended: true}));

// mongoose.connect(process.env.MONGODB);
// db = mongoose.connection;
// db.on('error', function(err){
//   console.log('connection error', err);
// });
// db.once('open', function () {
//   console.log(`MongoDB connection is live on ${PORT}`);
// });

mongoose.connect(process.env.MONGODB,(err, database) => {
  if(err) {
    return console.log(err);
  }
  db = mongoose.connection;
  app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
  })
})


// MongoClient.connect(process.env.MONGODB,(err, database) => {
//   if(err) {
//     return console.log(err);
//   }
//   db = database;
//   app.listen(PORT, ()=>{
//     console.log(`listening on ${PORT}`);
//   })
// })

app.get('/', (req, res) => res.sendFile(`${__dirname}/twoTop/index.html`));

app.post('/reservation', (req, res) => {
  db.collection('reservations').save(req.body, (err, result) => {
    if(err){
      return console.log(err);
    }
    console.log('saved to data base, BEEP BEEP');
    res.redirect('/');
  })
})
