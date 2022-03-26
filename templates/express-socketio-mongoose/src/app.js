require('dotenv').config();
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

require('./lib/dbConnection');
require('./socket')(server);

module.exports = server;