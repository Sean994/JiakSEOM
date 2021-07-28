const express = require('express');

const router = express.Router();
const searchResController = require('../controllers/searchResController');

router
    .route('/')
    .get(searchResController.searchRes)


module.exports = router