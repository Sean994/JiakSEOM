const MenuItem = require('../models/menuItemModel');
const BaseError = require('../utils/BaseError');
const httpStatusCodes = require('../utils/httpStatusCodes');

exports.getAllMenuItems = async (req, res, next) => {
  try {
    const menuItems = await MenuItem.find();

    res.status(200).json({
      status: 'success',
      data: {
        menuItems,
      },
      total_results: menuItems.length,
    });
  } catch (err) {
    next(new BaseError(err.name, httpStatusCodes.BAD_REQUEST, err.message));
  }
};

exports.createMenuItem = async (req, res, next) => {
  try {
    const newMenuItem = await MenuItem.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        newMenuItem,
      },
    });
  } catch (err) {
    next(new BaseError(err.name, httpStatusCodes.BAD_REQUEST, err.message));
  }
};

exports.getMenuItem = async (req, res, next) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);

    if (!menuItem) {
      throw new Error(
        `Sorry, there is no menuItem with this id : ${req.params.id}`
      );
    }

    res.status(200).json({
      status: 'success',
      data: {
        menuItem,
      },
    });
  } catch (err) {
    if (err.name === 'CastError') {
      err.message = `Menu Item with id: ${req.params.id} not found`;
    }
    next(new BaseError(err.name, httpStatusCodes.NOT_FOUND, err.message));
  }
};

exports.updateItem = async (req, res, next) => {
  try {
    const menuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!menuItem) {
      throw new Error(
        `Sorry, there is no menuItem with this id : ${req.params.id}`
      );
    }

    res.status(200).json({
      status: 'success',
      data: {
        menuItem,
      },
    });
  } catch (err) {
    if (err.name === 'CastError') {
      err.message = `Menu Item with id: ${req.params.id} not found`;
    }
    next(new BaseError(err.name, httpStatusCodes.NOT_FOUND, err.message));
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const menuItem = await MenuItem.findByIdAnDelete(req.params.id);

    if (!menuItem) {
      throw new Error(
        `Sorry, there is no menuItem with this id : ${req.params.id}`
      );
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    if (err.name === 'CastError') {
      err.message = `Menu Item with id: ${req.params.id} not found`;
    }
    next(new BaseError(err.name, httpStatusCodes.NOT_FOUND, err.message));
  }
};
