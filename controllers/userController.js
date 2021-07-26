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
      console.log(`api, ${err}`);
      res.status(500).json({
        status: 'fail',
        error : `Can't find all User data`
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
        error: "Unable to create User/ bcrypt failure in hashing"
      });
    }
  };
