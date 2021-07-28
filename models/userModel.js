const mongoose = require('mongoose');
const validateEmail =function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};
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
    validate : [validateEmail, 'Please fill a valid email address'],  
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
