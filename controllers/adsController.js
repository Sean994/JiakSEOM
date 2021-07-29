const Ads = require('../models/adsModel');

exports.getAds = async (req, res, next) => {
  try {
    const allAds = await Ads.find();
    res.status(200).json({
      status: 'Success',
      data: allAds,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'Failed',
      error: error.message,
    });
  }
};

exports.createAds = async (req, res, next) => {
  try {
    const createAds = await Ads.create(req.body);
    res.status(200).json({
      status: 'Success',
      data: createAds,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'Failed',
      error: error.message,
    });
  }
};
