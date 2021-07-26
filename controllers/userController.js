const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

exports.getAllUser = async (req, res, next) => {
    try {
      const Users = await User.find();
  
      res.status(201).json({
        status: 'success',
        data: {
          Users,
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

exports.createUser = async (req, res, next) => {
    try {
      const newUser = await User.create(req.body);
  
      res.status(201).json({
        status: 'success',
        data: {
          newUser,
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