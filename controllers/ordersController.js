const Orders = require('../models/ordersModel');
//const User = require('../models/userModel');
const BaseError = require('../utils/BaseError');
const httpStatusCodes = require('../utils/httpStatusCodes');

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Orders.find();

    res.status(200).json({
      status: 'success',
      data: {
        orders,
      },
    });
  } catch (err) {
    next(new BaseError(err.name, httpStatusCodes.NOT_FOUND, err.message));
  }
};

exports.createOrder = async (req, res, next) => {
  try {
    const newOrder = await Orders.create(req.body);
    res.status(200).json({
      status: 'success',
      newOrder,
    });
  } catch (err) {
    next(new BaseError(err.name, httpStatusCodes.BAD_REQUEST, err.message));
  }
};

exports.getOrdersByUser = async (req, res, next) => {
  try {
    const userId = req.params.user_id;
    const orders = await Orders.find({ user: userId })
      .populate({
        path: 'restaurant',
        options: { select: 'name' },
      })
      .populate({
        path: 'orders.item',
        options: { select: 'name price item_img' },
      });

    if (orders.length === 0) {
      throw new Error(
        `Sorry, there's no review with this user id : ${req.params.user_id}`
      );
    }

    res.status(200).json({
      status: 'success',
      data: {
        orders,
      },
    });
  } catch (err) {
    if (err.name === 'MongoError') {
      next(
        new BaseError(err.name, httpStatusCodes.INTERNAL_SERVER, err.message)
      );
    }
    next(new BaseError(err.name, httpStatusCodes.NOT_FOUND, err.message));
  }
};
