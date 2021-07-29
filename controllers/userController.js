// const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

exports.getAllUser = async (req, res, next) => {
  try {
    const Users = await User.find();

    res.status(200).json({
      status: 'success',
      data: {
        Users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      error: `Can't find all User data`,
    });
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const password = await bcrypt.hashSync(
      req.body.password,
      bcrypt.genSaltSync(8)
    );
    req.body.password = password;
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        newUser,
      },
    });
  } catch (err) {
    if (err.keyValue.email) {
      err.message = 'Email address already taken.';
    }
    //console.log('❌', err.message);
    res.status(400).json({
      status: 'fail',
      error: err.message,
    });
  }
};
exports.updateUser = async (req, res, next) => {
  try {
    const password = await bcrypt.hashSync(
      req.body.password,
      bcrypt.genSaltSync(8)
    );
    req.body.password = password;

    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: 'success',
      hello: 'hello',
      user,
    });
  } catch (error) {
    console.log('❌', error.message);
    res.status(400).json({
      status: 'fail',
      error: `Can't update user`,
    });
  }
};
exports.deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(202).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    console.log(`api, ${error}`);
    res.status(500).json({
      status: 'fail',
      error: `Can't delete user`,
    });
  }
};
