const PORT = 8080;
const env = require('dotenv').config();
const express = require('express');
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const app = express();

var db;



app.use(bodyParser.urlencoded({extended: true}));

// app.listen(PORT, (err) => {
//   err? console.log(err) : console.log(`Running on http://localhost${PORT}`);
// });

MongoClient.connect(process.env.MONGODB,(err, database) => {
  if(err) {
    return console.log(err);
  }
  db = database;
  app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
  })
})

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
