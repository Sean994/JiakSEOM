const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    trim: true,
  },
  last_name: {
    type: String,
    trim: true,
  },
  contact: {
    type: Number,
    required: [true, 'Must enter contact number'],
    trim: true,
  },
  email: {
    type: String,
    lowercase : [true, 'lowercase only'],
    required: [true, 'Must enter email'],
    unique: [true, 'Email is already taken'],
    trim: true,
  },
  username: {
    type: String,
    required: [true, 'Enter username'],
    unique: [true, 'Username is taken, please choose a different username'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Enter password'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'Enter your address'],
    trim: true,
  },
  postal_code: {
    type: Number,
    required: [true, 'Enter Postal Code'],
    trim: true,
  },
  birthday: {
    type: String,
    trim: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
