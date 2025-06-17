const mongoose = require('mongoose');

const UgcpageVideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  youtubeId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UgcpageVideo', UgcpageVideoSchema);
