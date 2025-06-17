// models/Video.js
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoId: { type: String, required: true }, // YouTube ID
  category: {
    type: mongoose.Schema.Types.ObjectId,
    
    required: true
  }
});

module.exports = mongoose.model('MainPageHeroVideo', videoSchema);
