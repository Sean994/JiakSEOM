const express = require('express');
const restaurantController = require('../controllers/restaurantController');

const router = express.Router();

router
  .route('/')
  .get(restaurantController.getAllRestaurants)
  .post(restaurantController.createRestaurant);

router
  .route('/:id')
  .get(restaurantController.getRestaurant)
  .put(restaurantController.updateRestaurant)
  .delete(restaurantController.deleteRestaurant);
module.exports = router;

//https://www.foodpanda.sg/restaurants/new?lat=1.3703648&lng=103.9451463&vertical=restaurants&cuisines=38
