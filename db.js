const mongoose = require('mongoose');

const Artwork = new mongoose.Schema({
  type: String,
  name: String,
  medium: String,
  artistDisplayName: String,
  description: String,
  id: Number,
  primaryImage: String
});

 // date: { type: Date, default: Date.now },

const artworks = {sjkljdfiso
  Artwork: mongoose.model('Artwork', Artwork),
};



mongoose.connect('mongodb://localhost:8080/access', { useNewUrlParser: true, useUnifiedTopology: true }).then((data)=>{
  console.log('mongodb connected');
  console.log('mongodb running on port 8080')


  console.jjlog(data.models);
  // console.log(data.modelSchemas.Artwork);
  // console.log(data)
})


module.exports = artworks;
