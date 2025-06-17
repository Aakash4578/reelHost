// models/ShortPageVideo.js
const mongoose = require('mongoose');

const ShortPageVideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  youtubeId: { type: String, required: true }, // only YouTube video ID
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ShortPageVideo', ShortPageVideoSchema);
