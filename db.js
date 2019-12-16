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

const artworks = {
  Artwork: mongoose.model('Artwork', Artwork),
};



mongoose.connect('mongodb://localhost:27017/access', { useNewUrlParser: true, useUnifiedTopology: true }).then((data)=>{
  console.log('mongodb connected');
  console.log(data.models);
  // console.log(data.modelSchemas.Artwork);
  // console.log(data)
})


module.exports = artworks;