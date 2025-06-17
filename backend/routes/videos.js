const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  description: String
});

const Video = mongoose.model('MainPageHeroVideo', videoSchema);

// GET all videos
router.get('/', async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
});

// POST a video
router.post('/', async (req, res) => {
  const { title, videoUrl, description } = req.body;
  const newVideo = new Video({ title, videoUrl, description });
  await newVideo.save();
  res.status(201).json({ message: 'Video added' });
});

// PUT (update) a video
router.put('/:id', async (req, res) => {
  const { title, videoUrl, description } = req.body;
  await Video.findByIdAndUpdate(req.params.id, { title, videoUrl, description });
  res.json({ message: 'Video updated' });
});

// DELETE a video
router.delete('/:id', async (req, res) => {
  await Video.findByIdAndDelete(req.params.id);
  res.json({ message: 'Video deleted' });
});

module.exports = router;
