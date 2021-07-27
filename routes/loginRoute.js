const express = require('express');

const router = express.Router();
const loginController = require('../controllers/loginController');

router
  .route('/')
  .post(loginController.login)
  .delete(loginController.logOut)
  .get(loginController.sessions)


module.exports = router;
