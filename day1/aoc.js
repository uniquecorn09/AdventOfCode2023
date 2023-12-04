const logger = require("../common/logger");

const DAY = 1;

const NUMBERS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const getNumbers = (line) => {
  logger.debug(`processing line ${line}`);
  const numbers = [];
  let numIdx = 0;
  for (let i = 0; i < line.length; i++) {
    logger.debug(`processing ${line[i]}`);
    if (Number.isInteger(Number(line[i]))) {
      logger.debug(`found integer ${line[i]}`);
      numbers[numIdx] = {};
      numbers[numIdx].index = i;
      numbers[numIdx].number = Number(line[i]);
      numIdx++;
    }
  }
  logger.debug(`found numbers`);
  // console.log(numbers);
  return numbers;
};

const getChumbers = (line) => {
  logger.debug(`processing line ${line}`);
  const chumbers = [];
  let numIdx = 0;
  for (let i = 0; i < NUMBERS.length; i++) {
    logger.debug(`processing ${NUMBERS[i]}`);
    let firstIndex = line.indexOf(NUMBERS[i]);
    if (firstIndex != -1) {
      logger.debug(`found chumber ${NUMBERS[i]}`);
      chumbers[numIdx] = {};
      chumbers[numIdx].index = line.indexOf(NUMBERS[i]);
      chumbers[numIdx].number = i;
      numIdx++;
    }
    if (
      line.lastIndexOf(NUMBERS[i]) != -1 &&
      line.lastIndexOf(NUMBERS[i]) != firstIndex
    ) {
      logger.debug(`found chumber ${NUMBERS[i]}`);
      chumbers[numIdx] = {};
      chumbers[numIdx].index = line.lastIndexOf(NUMBERS[i]);
      chumbers[numIdx].number = i;
      numIdx++;
    }
  }
  // console.log(chumbers);
  return chumbers;
};

const part1 = (input) => {
  let solution = 0;
  logger.debug(`Input for Day ${DAY} Part 1: ${input}`);
  input.forEach((line) => {
    let numbers = getNumbers(line);
    let firstNumber = Number(numbers[0].number);
    let lastNumber = Number(numbers[numbers.length - 1].number);
    logger.debug(`firstNumber: ${firstNumber}`);
    logger.debug(`lastNumber: ${lastNumber}`);
    solution += firstNumber * 10 + lastNumber;
  });
  logger.info(`Solution for Day ${DAY} Part 1: ${solution}`);
  logger.info(solution);
  return solution;
};

const part2 = (input) => {
  let solution = 0;
  logger.debug(`Input for Day ${DAY} Part 2: ${input}`);
  input.forEach((line) => {
    let allNumbers = getNumbers(line).concat(getChumbers(line));
    allNumbers.sort((a, b) => a.index - b.index);
    // console.log(allNumbers);
    let firstNumber = Number(allNumbers[0].number);
    let lastNumber = Number(allNumbers[allNumbers.length - 1].number);
    logger.debug(`firstNumber: ${firstNumber}`);
    logger.debug(`lastNumber: ${lastNumber}`);
    logger.debug(`sum: ${line}`);
    logger.debug(`sum: ${firstNumber * 10 + lastNumber}`);
    solution += firstNumber * 10 + lastNumber;
  });
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
