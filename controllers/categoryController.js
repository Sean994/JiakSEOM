const Category = require('../models/categoryModel');
const MenuItem = require('../models/menuItemModel');
const BaseError = require('../utils/BaseError');
const httpStatusCodes = require('../utils/httpStatusCodes');

exports.getRestaurantsPerCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id).select('-__v -slug');
    const restaurants = await MenuItem.aggregate([
      { $match: { category_id: category._id } },
      { $group: { _id: '$restaurant_id', numMenuItems: { $sum: 1 } } },
      {
        $lookup: {
          from: 'restaurants',
          let: { rid: { $toObjectId: '$_id' } },
          pipeline: [
            {
              $project: {
                _id: 1,
                name: '$name',
                discount_rate: '$discount_rate',
                image_cover: '$image_cover',
                preparation_time: '$preparation_time',
                ratingAverage: '$ratingAverage',
                ratingQuantity: '$ratingQuantity',
              },
            },
            { $match: { $expr: { $eq: ['$_id', '$$rid'] } } },
          ],
          as: 'restaurant',
        },
      },
    ]);

    if (restaurants.length === 0) {
      throw new Error('Sorry, no restaurants found');
    }

    res.status(200).json({
      status: 'success',
      category,
      restaurants,
      total_results: restaurants.length,
    });
  } catch (err) {
    next(new BaseError(err.name, httpStatusCodes.BAD_REQUEST, err.message));
  }
};

exports.getMenuItemsPerCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const menuItems = await MenuItem.find({ category_id: id }).select(
      '-__v -category_id -tags'
    );
    const category = await Category.findById(id).select('-__v -slug');

    if (menuItems.length === 0) {
      throw new Error('Sorry, no menu Items found');
    }

    res.status(200).json({
      status: 'success',
      category,
      menuItems,
      total_results: menuItems.length,
    });
  } catch (err) {
    next(new BaseError(err.name, httpStatusCodes.BAD_REQUEST, err.message));
  }
};

exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      status: 'success',
      data: {
        categories,
      },
      total_results: categories.length,
    });
  } catch (err) {
    next(new BaseError(err.name, httpStatusCodes.BAD_REQUEST, err.message));
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);

    res.status(201).json({
      status: 'success',
      newCategory,
    });
  } catch (err) {
    next(new BaseError(err.name, httpStatusCodes.BAD_REQUEST, err.message));
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      throw new Error(
        `Sorry, there is no category with this id: ${req.params.id}`
      );
    }

    res.status(200).json({
      status: 'success',
      category,
    });
  } catch (err) {
    if (err.name === 'CastError') {
      err.message = `Category with id: ${req.params.id} not found`;
    }
    next(new BaseError(err.name, httpStatusCodes.NOT_FOUND, err.message));
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      category,
    });
  } catch (err) {
    if (err.name === 'CastError') {
      err.message = `Restaurant with id: ${req.params.id} not found`;
      next(new BaseError(err.name, httpStatusCodes.NOT_FOUND, err.message));
    }
    next(new BaseError(err.name, httpStatusCodes.BAD_REQUEST, err.message));
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    await Category.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    next(new BaseError(err.name, httpStatusCodes.BAD_REQUEST, err.message));
  }
};
