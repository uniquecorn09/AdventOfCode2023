const logger = require("../common/logger");

const DAY = 2;

// 12 red cubes, 13 green cubes, and 14 blue cubes
const LOAD = [
  { amount: 12, color: "red" },
  { amount: 13, color: "green" },
  { amount: 14, color: "blue" },
];

const processGame = (line, gameID) => {
  logger.debug(`Game ${gameID}`);
  let processedGame = [];
  let sum = 0;
  let game = line.split(":");
  // console.log(game);
  let draws = game[1].split(";");
  // console.log(draws);
  draws.forEach((draw, dIndex) => {
    processedGame[dIndex] = [];
    let cubes = draw.split(",");
    // console.log(cubes);
    cubes.forEach((cube, index) => {
      processedGame[dIndex][index] = {};
      processedGame[dIndex][index].amount = cube.split(" ")[1];
      processedGame[dIndex][index].color = cube.split(" ")[2];
    });
  });
  return processedGame;
};

const checkDraws = (game) => {
  let multiplicator = 1;
  game.forEach((draws) => {
    draws.forEach((draw) => {
      LOAD.forEach((load) => {
        if (load.color === draw.color && load.amount < draw.amount) {
          multiplicator = 0;
        }
      });
    });
  });
  logger.debug(multiplicator);
  return multiplicator;
};

const getFewest = (game) => {
  let power = 1;
  let fewest = new Map();
  game.forEach((draws) => {
    draws.forEach((draw, index) => {
      if (fewest.get(draw.color)) {
        if (fewest.get(draw.color) < draw.amount) {
          fewest.set(draw.color, Number(draw.amount));
        }
      } else {
        fewest.set(draw.color, Number(draw.amount));
      }
    });
  });
  fewest.forEach((key, val) => {
    power *= key;
  });
  return power;
};

const part1 = (input) => {
  let solution = 0;
  logger.debug(`Input for Day ${DAY} Part 1: ${input}`);
  input.forEach((line, gameID) => {
    let game = processGame(line, gameID);
    solution += checkDraws(game) * (gameID + 1);
  });
  logger.info(`Solution for Day ${DAY} Part 1: ${solution}`);
  return solution;
};

const part2 = (input) => {
  let solution = 0;
  logger.debug(`Input for Day ${DAY} Part 2: ${input}`);
  input.forEach((line, gameID) => {
    let game = processGame(line, gameID);
    solution += getFewest(game);
  });
  logger.info(`Solution for Day ${DAY} Part 2: ${solution}`);
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
