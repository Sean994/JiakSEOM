const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router
  .route('/')
  .get(userController.getAllUser)
  .post(userController.createUser);

router
  .route('/:id')
  .put(userController.updateUser)
  .delete(userController.deleteUser);
module.exports = router;
