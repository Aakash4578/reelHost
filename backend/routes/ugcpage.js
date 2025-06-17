const express = require('express');
const router = express.Router();
const UgcpageVideo = require('../models/UgcpageVideo');

// Get all videos
router.get('/', async (req, res) => {
  try {
    const videos = await UgcpageVideo.find().sort({ createdAt: -1 });
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get video by ID
router.get('/:id', async (req, res) => {
  try {
    const video = await UgcpageVideo.findById(req.params.id);
    if (!video) return res.status(404).json({ error: 'Video not found' });
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create new video
router.post('/', async (req, res) => {
  try {
    const newVideo = new UgcpageVideo(req.body);
    const savedVideo = await newVideo.save();
    res.json(savedVideo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update video
router.put('/:id', async (req, res) => {
  try {
    const updatedVideo = await UgcpageVideo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedVideo) return res.status(404).json({ error: 'Video not found' });
    res.json(updatedVideo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete video
router.delete('/:id', async (req, res) => {
  try {
    const deletedVideo = await UgcpageVideo.findByIdAndDelete(req.params.id);
    if (!deletedVideo) return res.status(404).json({ error: 'Video not found' });
    res.json({ message: 'Video deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;