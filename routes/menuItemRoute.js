const express = require('express');
const menuItemController = require('../controllers/menuItemController');

const router = express.Router();

router
  .route('/')
  .get(menuItemController.getAllMenuItems)
  .post(menuItemController.createMenuItem);

router
  .route('/:id')
  .get(menuItemController.getMenuItem)
  .put(menuItemController.updateItem)
  .delete(menuItemController.deleteItem);

module.exports = router;
