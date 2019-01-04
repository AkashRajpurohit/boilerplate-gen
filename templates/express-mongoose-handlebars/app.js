const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const path = require("path");
const fs = require("fs");
const morgan = require('morgan')
const winston = require('./config/winston')

// Load keys
const keys = require("./config/keys");

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

// HandleBars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static folder
app.use(express.static(path.join(__dirname, "public/")));

/* --------------------------------------------------------------------------- */

// Database Connection
mongoose
  .connect(
    keys.mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log("ERR in MongoDB connection: ", err));

/* --------------------------------------------------------------------------- */

// Use Routes
app.use("/index", index)

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`🚀 Server started at port ${port}...`));
