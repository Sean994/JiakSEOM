// const jwt = require("jsonwebtoken")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")

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
      const password = await bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8))
      req.body.password = password
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
