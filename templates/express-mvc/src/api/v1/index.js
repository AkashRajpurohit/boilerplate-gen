const express = require('express');

const router = express.Router();

const user = require('./users/user.routes');

router.get('/', (_, res) => {
  res.json({
    message: 'Welcome to the Version 1 of the API'
  });
});

router.use('/user', user);

module.exports = router;
