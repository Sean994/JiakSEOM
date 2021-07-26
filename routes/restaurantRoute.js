const express = require('express');
const restaurantController = require('../controllers/restaurantController');

const router = express.Router();

router
  .route('/')
  .get(restaurantController.getAllRestaurants)
  .post(restaurantController.createRestaurant);

module.exports = router;
