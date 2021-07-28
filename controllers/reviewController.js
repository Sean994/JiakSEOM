const Review = require('../models/reviewModel');
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
