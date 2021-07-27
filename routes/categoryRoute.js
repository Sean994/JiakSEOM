const express = require('express');

const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.route('/:id/menu-items').get(categoryController.getMenuItemsPerCategory);
router
  .route('/:id/restaurants')
  .get(categoryController.getRestaurantsPerCategory);

router
  .route('/')
  .get(categoryController.getAllCategories)
  .post(categoryController.createCategory);

router
  .route('/:id')
  .get(categoryController.getCategory)
  .put(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

module.exports = router;
