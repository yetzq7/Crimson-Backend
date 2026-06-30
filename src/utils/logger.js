// logger.js
const colors = {
  reset: '\x1b[0m',
  crimson: '\x1b[38;2;220;20;60m', // 100% crimson very accurate
  green: '\x1b[32m',
  red: '\x1b[31;1m',
};

const log = (message) => {
  console.log(`${colors.crimson}[LOG]${colors.reset} ${message}`);
};

const debug = (message) => {
  console.log(`${colors.green}[DEBUG]${colors.reset} ${message}`);
};

const error = (message) => {
  console.error(`${colors.red}[ERROR]${colors.reset} ${message}`);
};

const middleware = (req, res, next) => {
  log(`${req.method} ${req.url}`);
  next();
};

module.exports = { log, debug, error, middleware };