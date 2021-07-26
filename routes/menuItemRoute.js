const express = require('express');
const menuItemController = require('../controllers/menuItemController');

const router = express.Router();

router
  .route('/')
  .get(menuItemController.getAllMenuItems)
  .post(menuItemController.createMenuItem);

module.exports = router;
