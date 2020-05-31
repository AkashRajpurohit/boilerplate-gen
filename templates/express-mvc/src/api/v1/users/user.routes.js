const express = require('express');

const router = express.Router();

const { getAllUsers } = require('./user.controller');

router
  .route('/')
  .get(getAllUsers);

module.exports = router;
