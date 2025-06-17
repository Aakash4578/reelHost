// models/mainpageVideos.js

const mongoose = require('mongoose');

const MainPageVideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoId: { type: String, required: true }, // Only YouTube video ID
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MainPageCategory', // Yeh aapke defined category model ka reference hai
    required: true
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MainPageVideos', MainPageVideoSchema);
