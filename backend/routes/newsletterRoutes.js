const express = require('express');
const router = express.Router();
const NewsletterSubscriber = require('../models/NewsletterSubscriber');

// POST: Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
  const { email } = req.body;
  try {
    const existing = await NewsletterSubscriber.findOne({ email });
    if (existing) return res.status(409).json({ message: 'Already subscribed!' });

    const subscriber = new NewsletterSubscriber({ email });
    await subscriber.save();
    res.status(201).json({ message: 'Subscribed successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});
// GET all subscribers
router.get('/all', async (req, res) => {
  try {
    const list = await NewsletterSubscriber.find();
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching subscribers' });
  }
});

// DELETE subscriber by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    await NewsletterSubscriber.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting subscriber' });
  }
});

module.exports = router;
// 
