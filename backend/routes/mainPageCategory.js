const express = require('express');
const router = express.Router();
const MainPageCategory = require('../models/MainPageCategory');

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await MainPageCategory.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new category
router.post('/', async (req, res) => {
  const { name, description } = req.body;
  const newCategory = new MainPageCategory({ name, description });
  try {
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get one category by id
router.get('/:id', async (req, res) => {
  try {
    const category = await MainPageCategory.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update category
router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await MainPageCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCategory) return res.status(404).json({ message: 'Category not found' });
    res.json(updatedCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete category
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await MainPageCategory.findByIdAndDelete(req.params.id);
    if (!deletedCategory) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
