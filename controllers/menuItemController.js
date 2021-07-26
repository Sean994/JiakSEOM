const MenuItem = require('../models/menuItemModel');

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
    res.status(400).json({
      status: 'fail',
      error: err,
    });
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
    res.status(400).json({
      status: 'fail',
      error: err,
    });
  }
};
