const Review = require('../models/reviewModel');
const Restaurant = require('../models/restaurantModel');
const BaseError = require('../utils/BaseError');
const httpStatusCodes = require('../utils/httpStatusCodes');

exports.getAllReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find();
    res.status(200).json({
      status: 'success',
      data: {
        reviews,
      },
    });
  } catch (err) {
    next(new BaseError(err.name, httpStatusCodes.BAD_REQUEST, err.message));
  }
};

exports.createReview = async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);

    const { restaurant: restaurantId, rating } = req.body;

    const restaurantQuery = await Restaurant.findById(restaurantId);

    const { ratingAverage, ratingQuantity } = restaurantQuery; //4.8 163

    let newQuantity;
    let newRating;

    if (rating) {
      newQuantity = ratingQuantity + 1;
      newRating = (ratingAverage * ratingQuantity + rating) / ratingQuantity;

      const rest = await Restaurant.findByIdAndUpdate(
        restaurantId,
        { ratingAverage: newRating.toFixed(1), ratingQuantity: newQuantity },
        { new: true, runValidators: true }
      );
      console.log(rest);
    }

    res.status(200).json({
      status: 'success',
      newReview,
    });
  } catch (err) {
    next(new BaseError(err.name, httpStatusCodes.BAD_REQUEST, err.message));
  }
};

exports.getReviewsByRestaurantId = async (req, res, next) => {
  try {
    const reviews = await Review.find({
      restaurant: req.params.restaurant_id,
    }).populate({
      path: 'user',
      options: { select: 'username' },
    });

    if (reviews.length === 0) {
      throw new Error(
        `Sorry, there are no reivews for this restaurant with this id : ${req.params.restaurant_id}`
      );
    }

    res.status(200).json({
      status: 'success',
      data: {
        reviews,
      },
    });
  } catch (err) {
    if (err.name === 'CastError') {
      err.message = `INVALID ID: Cast to ObjectId failed for value ${req.params.restaurant_id}`;
      next(new BaseError(err.name, httpStatusCodes.BAD_REQUEST, err.message));
    }
    next(new BaseError(err.name, httpStatusCodes.NOT_FOUND, err.message));
  }
};
