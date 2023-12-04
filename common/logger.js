const winston = require("winston");
const LOGLEVEL = "info";

const LOG_FORMAT = winston.format.combine(
  // winston.format.align(),
  winston.format.timestamp({ format: "DD-MM-YYYY T hh:mm:ss.sss A" }),

  winston.format.printf(({ level, message }) => {
    return `${level.toUpperCase().padEnd(5)} | ${message}`;
  })
);

module.exports = winston.createLogger({
  format: LOG_FORMAT,
  level: LOGLEVEL,
  transports: [
    new winston.transports.Console(),
    // new winston.transports.File({
    //   filename: "./logs/app.log",
    // }),
  ],
});
