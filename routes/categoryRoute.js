const express = require('express');

const router = express.Router();
const categoryController = require('../controllers/categoryController');

router
  .route('/')
  .get(categoryController.getAllCategories)
  .post(categoryController.createCategory);

router.route('/:id');

module.exports = router;
