const mongoose = require('mongoose');

const LongpageVideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  youtubeId: { type: String, required: true },
  description: { type: String },
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LongpageVideo', LongpageVideoSchema);
