const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const morgan = require('morgan')
const winston = require('./config/winston')

const app = express();

// Get Routes
const index = require('./routes/index')

/* --------------------------------------------------------------------------- */
// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS Middleware
app.use(cors());

// Morgan
app.use(morgan('combined', { stream: winston.stream }))

// Static folder
app.use(express.static(path.join(__dirname, "public")));

/* --------------------------------------------------------------------------- */

// Use Routes
app.use("/", index)

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`🚀 Server started at port ${port}...`));
