const chalk = require("chalk");

function LogError(message) {
    console.log(chalk.red(`ERROR - ${message}`));
}

function Log(message) {
    console.log(chalk.blue(`LOG - ${message}`));
}

function LogDebug(message) {
    console.log(chalk.green(`DEBUG - ${message}`));
}

module.exports = {
    LogError,
    Log,
    LogDebug
};