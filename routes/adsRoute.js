const express = require('express');

const router = express.Router();
const adsController = require('../controllers/adsController');

router
  .route('/')
  .get(adsController.getAds)
  .post(adsController.createAds)

module.exports = router;
