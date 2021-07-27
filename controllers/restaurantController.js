const Restaurant = require('../models/restaurantModel');
//const MenuItem = require('../models/menuItemModel');
const RestaurantFilter = require('../utils/restaurantFilter');
//const { sortBy } = require('../utils/restaurantFilter');

exports.getAllRestaurants = async (req, res, next) => {
  try {
    console.log('req.query: ', req.query);

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
          };
          return restaurantObj;
        });
    }

    res.status(200).json({
      status: 'success',
      data: {
        restaurants,
      },
      total_results: restaurants.length,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      error: err.message,
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

exports.getRestaurant = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id).populate(
      'menuItems'
    );
    res.status(201).json({
      status: 'success',
      restaurant,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      error: err,
    });
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
    console.log(err);
    res.status(400).json({
      status: 'fail',
      error: err,
    });
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
    console.log(err);
    res.status(400).json({
      status: 'fail',
      error: err,
    });
  }
};
