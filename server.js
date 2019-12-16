const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
// const router = require('router');
// const session = require('express-session');
// const URLSlugs = require('mongoose-url-slugs');

const { Artwork } = require('./db.js');
const cors = require('cors');
app.use(cors());

app.use(express.json());    //THIS WAS IT OMG

app.use(express.urlencoded({ extended: false }));   //body parser

app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  // res.render('');
  // res.sendFile('index.html')


  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  // res.send('hello');
});



/* //setup initial
var artwork1 = new Artwork(
  { type: 'artwork',
  name: 'picasso'}
);

artwork1.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
*/

/*
 Trying to have clientside post- then save on mongoose

 -> need to save the img url, objectid, name, artist, date created, and description(alt)

 -> make it both deletable as well
 -> no duplicate? maybe
*/
// app.get('/api/altpost', (req,res)=>{
//   console.log('/api/altpost')
// })
app.post('/api/altpost', function(req, res) {
  console.log(req.body,'req.body');

  new Artwork({
    type : req.body.type,
    name: req.body.name,
    medium: req.body.medium,
    artistDisplayName: req.body.artistDisplayName,
    description: req.body.description,
    id: req.body.id,
    primaryImage: req.body.primaryImage
  }).save()
    .then(()=> res.json('altpost added!'))

});



// searching artwork from mongoose db
const allowedTypes = ['artwork'];
app.get('/api/altpost', (req, res) => {

  Artwork.find({}, (err, result) => {
    res.json( result.map((g) => {
        return { name: g.name, medium: g.medium, artistDisplayName: g.artistDisplayName, description: g.description, id: g.id, primaryImage: g.primaryImage };
      }) );
  });

  // console.log(req.query,'req.query')

  // const queryObject = {};
  // const n = req.query.artworktype;
  //
  // if (n && allowedTypes.indexOf(n) > -1) {
  //   queryObject.type = n;
  // }
  // Artwork.find({}, (err, result) => {
  //   console.log(result);
  // });
  // Artwork.find(queryObject, (err, result) => {
  //   console.log(result,'result')
  //   res.json(result.map((g) => {
  //     return { type: g.type, name: g.name };
  //   }));
  // });
});




//db.js -> 8080  -> mongodb
//addtostate -> 8080 -> post
// context -> 8080 -> get


//changed to 5555

const PORT = process.env.PORT || 5555;
app.listen(PORT);
console.log(`started server on port ${PORT}`);
