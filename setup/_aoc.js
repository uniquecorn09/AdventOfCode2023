const logger = require("../common/logger");

const DAY = 1;

const part1 = (input) => {
  let solution = 0;
  logger.debug(`Input for Day ${DAY} Part 1: ${input}`);
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
