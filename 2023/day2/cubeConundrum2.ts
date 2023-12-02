
/**
 * For each game, find the minimum set of cubes that must have been present.
 * What is the sum of the power of these sets?
 */
const codeConundrum2 = () => {
  const fs = require('fs');
  const text = fs.readFileSync('./input.txt', { encoding: 'utf8', flag: 'r' });
  const textByLine = text.split('\n');

  let sum = 0;
  for (const line of textByLine) {
    const replaced = line.replace(/[,:;]/g, "")
    const split = replaced.split(' ');
    let maxRed = 0;
    let maxGreen = 0;
    let maxBlue = 0;
    for (let i = 3; i < split.length; i += 2) {
      if (split[i] === "red" && Number(split[i - 1]) > maxRed) {
        maxRed = split[i - 1];
      } else if (split[i] === "green" && Number(split[i - 1]) > maxGreen) {
        maxGreen = split[i - 1];
      } else if (split[i] === "blue" && Number(split[i - 1]) > maxBlue) {
        maxBlue = split[i - 1];
      }
    }
    sum += (Number(maxRed) * Number(maxGreen) * Number(maxBlue));
    console.log({maxRed, maxGreen, maxBlue, sum})
  }
  console.log({ sum });
};

codeConundrum2();
