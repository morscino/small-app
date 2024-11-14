import winston from 'winston';

// Creates and exports a logger instance
export const logger = winston.createLogger({
  level: 'info', // Set the log level
  format: winston.format.json(), // Specify the log format
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: 'application.log' }), // Log to a file
  ],
});

