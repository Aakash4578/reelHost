const express = require('express');
const router = express.Router();
const MainPageVideos = require('../models/mainpageVideos');

// ✅ GET all videos
router.get('/', async (req, res) => {
  try {
    const videos = await MainPageVideos.find().populate('category');
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET single video
router.get('/:id', async (req, res) => {
  try {
    const video = await MainPageVideos.findById(req.params.id).populate('category');
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST - add video
router.post('/', async (req, res) => {
  try {
    const newVideo = new MainPageVideos(req.body);
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ PUT - update video
router.put('/:id', async (req, res) => {
  try {
    const updatedVideo = await MainPageVideos.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedVideo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ DELETE - delete video
router.delete('/:id', async (req, res) => {
  try {
    await MainPageVideos.findByIdAndDelete(req.params.id);
    res.json({ message: 'Video deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
