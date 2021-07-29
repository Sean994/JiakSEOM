const mongoose = require('mongoose');

const AdsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'PLease insert a title for your ad'],
  },
  image: {
    type: String,
    required: [true, 'Please insert a image link for your ad'],
  },
  description: {
    type: String,
    required: [true, 'Please insert a description for your ad'],
  },
});

const Ads = mongoose.model('Ads', AdsSchema);

module.exports = Ads;
