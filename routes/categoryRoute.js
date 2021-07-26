const express = require('express');

const router = express.Router();
const categoryController = require('../controllers/categoryController');
const userController = require("../controllers/userController")
router
  .route('/')
  .get(categoryController.getAllCategories)
  .post(categoryController.createCategory);

router
  .route('/user')

module.exports = router;
