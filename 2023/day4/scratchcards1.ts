/**
 * Each card has two lists of numbers separated by a vertical bar (|):
 * a list of winning numbers and then a list of numbers you have.
 * You have to figure out which of the numbers you have appear in the list of winning numbers.
 * The first match makes the card worth one point and each match after the first doubles 
 * the point value of that card. How many points are they worth in total?
 */
const scratchcards1 = (inputFile) => {
  const fs = require('fs');
  const text = fs.readFileSync(inputFile, { encoding: 'utf8', flag: 'r' });
  const textByLine = text.split('\n');

  let sum = 0;
  for (const line of textByLine) {
    const split = line.split(/[:\|]/);
    const winningNumbers = [...split[1].matchAll(/\d+/g)].map(num => num[0]);
    const lineSum = [...split[2].matchAll(/\d+/g)].map(num => num[0]).reduce((acc, cur) => {
      if (winningNumbers.includes(cur)) {
        return acc === 0 ? 1 : acc * 2;
      }
      return acc;
    }, 0);
    sum += lineSum;
  }
  return sum;
}

console.log(scratchcards1('input.txt'));