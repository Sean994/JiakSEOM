const bcrypt = require('bcrypt');
const User = require('../models/userModel');

exports.login = async (req, res) => {
  try {
    const foundUser = await User.findOne({ username: req.body.username });
    if (!foundUser) {
      throw new Error(
        `Sorry, there's no user with this username : ${req.body.username}`
      );
    } else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
      req.session.currentUser = foundUser;

      res.status(200).json({
        status: 'success',
        user: req.session.currentUser,
      });
    } else {
      throw new Error('Wrong Password');
    }
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      status: 'fail',
      error: err.message,
    });
  }
};

exports.logOut = async (req, res) => {
  try {
    await req.session.destroy(() => {
      res.status(200).json({
        status: 'success',
        data: null,
      });
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      error: err.message,
    });
  }
};

exports.sessions = async (req, res) => {
  res.send(req.session.currentUser);
};
