const express = require('express');
const ordersController = require('../controllers/ordersController');

const router = express.Router();

router
  .route('/')
  .get(ordersController.getOrders)
  .post(ordersController.createOrder);

router.route('/:user_id').get(ordersController.getOrdersByUser);

module.exports = router;
