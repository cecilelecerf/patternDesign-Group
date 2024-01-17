const fs = require('fs');

class LoggerObserver {
    update(message) {
        const logMessage = `[${new Date().toISOString()}] ${message}\n`;

        // Append the log message to the log.txt file
        fs.appendFileSync('log.txt', logMessage);

        // You can also log the message to the console or perform additional actions if needed
        console.log(logMessage);
    }
}

module.exports = LoggerObserver;
