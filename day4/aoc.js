const logger = require("../common/logger");

const DAY = 4;

const playGame = (card) => {
  logger.debug(`${card.split("|")[0].split(":")[0]}`);
  let points = 0;
  let factor = 1;
  let winning = card
    .split("|")[0]
    .split(":")[1]
    .split(/[ \|\t]+/)
    .filter((item) => item !== "");
  let game = card
    .split("|")[1]
    .split(/[ \|\t]+/)
    .filter((item) => item !== "");
  winning.forEach((number) => {
    logger.debug(`number: ${number}`);
    logger.debug(game.indexOf(number) != -1);
    if (game.indexOf(number) != -1) {
      if (points == 0) points++;
      points = points * factor;
      factor = 2;
    }
  });
  logger.debug(`points: ${points}`);
  return points;
};
const part1 = (input) => {
  let solution = 0;
  logger.debug(`Input for Day ${DAY} Part 1: ${input}`);
  input.forEach((card) => {
    solution += playGame(card);
  });
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
