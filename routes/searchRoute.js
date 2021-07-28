const express = require('express');

const router = express.Router();
const searchResController = require('../controllers/searchResController');

router
    .route('/restaurants')
    .get(searchResController.searchRes)

router 
    .route('/menuitems')
    .get(searchResController.searchItems)
module.exports = router