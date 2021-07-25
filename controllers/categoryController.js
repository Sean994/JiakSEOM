const Category = require('../models/categoryModel');

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
  } catch (err) {}
};

exports.createCategory = async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        newCategory,
      },
    });
  } catch (err) {
    console.log(`api, ${err}`);
    res.status(500).json({
      status: 'fail',
      error: err,
    });
  }
};
