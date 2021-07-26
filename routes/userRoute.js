const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router
  .route('/')
  .get(userController.getAllUser)
  .post(userController.createUser)
  .put(userController.updateUser)
module.exports = router;
