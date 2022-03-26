require('dotenv').config();
const express = require('express');

const commonMiddlewares = require('./middlewares');
const { notFound, errorHandler } = require('./errorHandlers');
const api = require('./api');

require('./lib/dbConnection');

const app = express();

app.use(...commonMiddlewares);

app.get('/', (_, res) => {
  res.json({
    message: 'Welcome to Boilerplate-gen Bootstraped Project'
  });
});

app.use('/api', api);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
