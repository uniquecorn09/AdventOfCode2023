const logger = require("../common/logger");

const DAY = 3;

const SYMBOLS = [
  "*",
  "#",
  "+",
  "$",
  "!",
  "§",
  "%",
  "&",
  "/",
  "(",
  ")",
  "=",
  "?",
  "@",
  "-",
];

const processParts = (engine) => {
  let sum = 0;
  for (let i = 0; i < engine.length; i++) {
    let line = engine[i];
    logger.debug(line);
    let part = "";
    let isValidPart = false;
    for (let j = 0; j < line.length; j++) {
      if (Number.isInteger(Number(line[j]))) {
        logger.debug(`processing ${line[j]}`);
        part += line[j];
        if (
          SYMBOLS.indexOf(line[j - 1]) != -1 ||
          SYMBOLS.indexOf(line[j + 1]) != -1
        ) {
          isValidPart = true;
        }
        if (engine[i - 1]) {
          // logger.debug(`look up ${engine[i - 1][j]}`);
          // logger.debug(`look up-left ${engine[i - 1][j - 1]}`);
          // logger.debug(`look up-right ${engine[i - 1][j + 1]}`);
          if (
            SYMBOLS.indexOf(engine[i - 1][j]) != -1 ||
            SYMBOLS.indexOf(engine[i - 1][j - 1]) != -1 ||
            SYMBOLS.indexOf(engine[i - 1][j + 1]) != -1
          ) {
            isValidPart = true;
          }
        }
        if (engine[i + 1]) {
          // logger.debug(`look down ${engine[i + 1][j]}`);
          // logger.debug(`look down-left ${engine[i + 1][j - 1]}`);
          // logger.debug(`look down-right ${engine[i + 1][j + 1]}`);
          if (
            SYMBOLS.indexOf(engine[i + 1][j]) != -1 ||
            SYMBOLS.indexOf(engine[i + 1][j - 1]) != -1 ||
            SYMBOLS.indexOf(engine[i + 1][j + 1]) != -1
          ) {
            isValidPart = true;
          }
        }
      } else {
        logger.debug(`part ${part}`);
        logger.debug(`isValid ${isValidPart}`);
        if (isValidPart) {
          sum += Number(part);
        }
        part = "";
        isValidPart = false;
      }
    }
  }
  return sum;
};

const part1 = (input) => {
  let solution = 0;
  logger.debug(`Input for Day ${DAY} Part 1: ${input}`);
  solution = processParts(input);
  logger.info(`Solution for Day ${DAY} Part 1: ${solution}`);
  logger.info(solution);
  return solution;
};

const part2 = (input) => {
  let solution = 0;
  logger.debug(`Input for Day ${DAY} Part 2: ${input}`);
  logger.info(`Solution for Day ${DAY} Part 2: ${solution}`);
  logger.info(solution);
  return solution;
};

const startPuzzle = (part, input) => {
  switch (part) {
    case 1:
      return part1(input);
    case 2:
      return part2(input);
    default:
      break;
  }
};

module.exports = startPuzzle;
