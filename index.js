const {
  readData,
  readNumbers,
  readMap,
  readString,
} = require("./common/fileReader");
const CURRENTDAY = 2;
const startPuzzle = require(`./day${CURRENTDAY}/aoc.js`);

const input1 = readString(__dirname + `/day${CURRENTDAY}/data1.txt`);
const input2 = readString(__dirname + `/day${CURRENTDAY}/data2.txt`);

startPuzzle(1, input1);
startPuzzle(2, input2);
