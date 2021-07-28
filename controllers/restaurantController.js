const Restaurant = require('../models/restaurantModel');

const RestaurantFilter = require('../utils/restaurantFilter');
const BaseError = require('../utils/BaseError');
const httpStatusCodes = require('../utils/httpStatusCodes');

exports.getAllRestaurants = async (req, res, next) => {
  try {
    const data = new RestaurantFilter(Restaurant.find(), req.query)
      .sortBy()
      .giveOffers()
      .populateMenu();

    // const restaurants = await Restaurant.find();
    let restaurants = await data.query;
    if (req.query.category) {
      const categoryArr = req.query.category.split(',');
      restaurants = restaurants
        .filter((restaurant) => {
          restaurant.menuItems.forEach((item) => {
            if (item.category_id.toString().indexOf(categoryArr) !== -1) {
              console.log(item);
              restaurant.hasCategory = true;
            }
          });

          return restaurant.hasCategory === true;
        })
        .map((restaurant) => {
          const restaurantObj = {
            _id: restaurant._id,
            kor_name: restaurant.kor_name,
            name: restaurant.name,
            location: restaurant.location,
            ratingAverage: restaurant.ratingAverage,
            ratingQuantity: restaurant.ratingQuantity,
            preparation_time: restaurant.preparation_time,
            image_cover: restaurant.image_cover,
            slug: restaurant.slug,
            delivery_fee: restaurant.delivery_fee,
            discount_rate: restaurant.discount_rate || null,
          };
          return restaurantObj;
        });
    }

    if (restaurants.length === 0) {
      throw new Error('No results found ');
    }

    res.status(200).json({
      status: 'success',
      data: {
        restaurants,
      },
      total_results: restaurants.length,
    });
  } catch (err) {
    next(new BaseError(err.name, httpStatusCodes.NOT_FOUND, err.message));
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
    next(new BaseError(err.name, httpStatusCodes.BAD_REQUEST, err.message));
  }
};

exports.getRestaurant = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id).populate(
      'menuItems'
    );

    if (!restaurant) {
      throw new Error(
        `Sorry, there is no restaurant with this id: ${req.params.id}`
      );
    }

    res.status(200).json({
      status: 'success',
      restaurant,
    });
  } catch (err) {
    if (err.name === 'CastError') {
      err.message = `Restaurant with id: ${req.params.id} not found`;
    }
    next(new BaseError(err.name, httpStatusCodes.NOT_FOUND, err.message));
  }
};

exports.updateRestaurant = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidator: true,
      }
    );
    res.status(200).json({
      status: 'success',
      restaurant,
    });
  } catch (err) {
    if (err.name === 'CastError') {
      err.message = `Restaurant with id: ${req.params.id} not found`;
      next(new BaseError(err.name, httpStatusCodes.NOT_FOUND, err.message));
    }
    next(new BaseError(err.name, httpStatusCodes.BAD_REQUEST, err.message));
  }
};

exports.deleteRestaurant = async (req, res, next) => {
  try {
    await Restaurant.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    next(new BaseError(err.name, httpStatusCodes.BAD_REQUEST, err.message));
  }
};
