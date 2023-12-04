const puzzle = require("./aoc");
const { readData, readNumbers } = require("../common/fileReader");
const solutions = readNumbers(__dirname + "/solutions.txt");

it("should process sample input (Testdata)", () => {
  const input = readData(__dirname + "/testdata1.txt");
  expect(puzzle(1, input)).toBe(142);
});

it("should process sample input (Puzzledata)", () => {
  const input = readData(__dirname + "/data1.txt");
  expect(puzzle(1, input)).toBe(solutions[0]);
});

it("should process sample input (Testdata)", () => {
  const input = readData(__dirname + "/testdata2.txt");
  expect(puzzle(2, input)).toBe(281);
});

it("should process sample input (Puzzledata)", () => {
  const input = readData(__dirname + "/data2.txt");
  expect(puzzle(2, input)).toBe(solutions[1]);
});
