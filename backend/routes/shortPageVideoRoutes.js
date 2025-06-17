// routes/shortPageVideoRoutes.js
const express = require('express');
const router = express.Router();
const ShortPageVideo = require('../models/ShortPageVideo');

// CREATE
router.post('/', async (req, res) => {
  try {
    const { title, youtubeId } = req.body;
    const newVideo = new ShortPageVideo({ title, youtubeId });
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const videos = await ShortPageVideo.find();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updatedVideo = await ShortPageVideo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedVideo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await ShortPageVideo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Video deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
