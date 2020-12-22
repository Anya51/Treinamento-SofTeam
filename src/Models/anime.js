const mongoose = require('mongoose');

//Options
mongoose.set('useFindAndModify', false);

//User Schema
const AnimeSchema = new mongoose.Schema({

  end_date: {
    type: String,
    trim: true,
  },

  episodes: {
    type: Number,
    trim: true,
  },

  rank: {
    type: Number,
    trim: true,
  },

  score: {
    type: Number,
    trim: true,
  },

  start_date: {
    type: String,
    trim: true,
  },

  title: {
    type: String,
    required: true,
    unique:true,
    trim: true
  },


});

module.exports = mongoose.model('Anime', AnimeSchema);