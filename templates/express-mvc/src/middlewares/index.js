const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const winston = require('../config/winston');

module.exports = [
  express.urlencoded({ extended: false }),
  express.json(),
  morgan('combined', { stream: winston.stream }),
  // morgan('dev')
  helmet(),
  cors()
];
