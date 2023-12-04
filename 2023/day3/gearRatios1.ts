/**
 * The engine schematic (your puzzle input) consists of a visual representation of the engine.
 * There are lots of numbers and symbols you don't really understand, but apparently any number
 * adjacent to a symbol, even diagonally, is a "part number" and should be included in your sum.
 * (Periods (.) do not count as a symbol.) What is the sum of all of the part numbers in the engine schematic?
 */
const gearRatios1 = (inputFile) => {
  const fs = require('fs');
  const text = fs.readFileSync(inputFile, { encoding: 'utf8', flag: 'r' });
  const textByLine = text.split('\n');

  let sum = 0;
  for (let i = 0; i < textByLine.length; i++) {
    const line = textByLine[i];
    const digits = [...line.matchAll(/\d+/g)];
    const lineSum = digits.reduce((acc, cur) => {
      const { [0]: digit, index } = cur;
      
      const start = index === 0 ? 0 : index - 1;
      const end = index + digit.length + 1;
      const above = i !== 0 ? textByLine[i - 1].slice(start, end) : '';
      const current = line.slice(start, end)
      const below = i < textByLine.length - 1 ? textByLine[i + 1].slice(start, end) : '';

      const regex = /[^\d\.]/;
      if (above.match(regex)?.[0] || below.match(regex)?.[0] || current.match(regex)?.[0]) {
        return acc += Number(digit);
      }

      return acc;
    }, 0);
    sum += lineSum;
  }

  return sum;
}

console.log(gearRatios1('input.txt'));
