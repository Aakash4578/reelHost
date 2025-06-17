const express = require('express');
const router = express.Router();
const LongpageVideo = require('../models/LongpageVideo');

// Create - POST /api/longpage
router.post('/', async (req, res) => {
  try {
    const video = new LongpageVideo(req.body);
    await video.save();
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read All - GET /api/longpage
router.get('/', async (req, res) => {
  try {
    const videos = await LongpageVideo.find();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update - PUT /api/longpage/:id
router.put('/:id', async (req, res) => {
  try {
    const video = await LongpageVideo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete - DELETE /api/longpage/:id
router.delete('/:id', async (req, res) => {
  try {
    await LongpageVideo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
