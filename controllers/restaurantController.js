const Restaurant = require('../models/restaurantModel');

exports.getAllRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find();

    res.status(200).json({
      status: 'success',
      data: {
        restaurants,
      },
      total_results: restaurants.length,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      error: err,
    });
  }
};

exports.createRestaurant = async (req, res, next) => {
  try {
    const newRestaurant = await Restaurant.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        newRestaurant,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      error: err,
    });
  }
};
