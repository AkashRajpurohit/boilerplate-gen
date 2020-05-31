const {
  format,
  createLogger,
  transports,
  config
} = require('winston');

const { combine, timestamp, prettyPrint } = format;
const path = require('path');

const fs = require('fs');

// Create logs folder
const dir = path.join(__dirname, '..', 'logs');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// define the custom settings for each transport (file, console)
const options = {
  infoFile: {
    level: 'info',
    filename: path.join(__dirname, '..', 'logs', 'info.log'),
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  errorFile: {
    level: 'error',
    filename: path.join(__dirname, '..', 'logs', 'error.log'),
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: 'error',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

// instantiate a new Winston Logger with the settings defined above
const logger = createLogger({
  levels: config.syslog.levels,
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new transports.File(options.infoFile),
    new transports.File(options.errorFile),
    new transports.Console(options.console)
  ],
  exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write(message) {
    // use the 'info' log level so the output will be picked up
    // by both transports (file and console)
    logger.info(message);
  },
};

module.exports = logger;
