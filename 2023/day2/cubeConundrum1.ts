
/**
 * Determine which games would have been possible if the bag had been loaded with
 * only 12 red cubes, 13 green cubes, and 14 blue cubes.
 * What is the sum of the IDs of those games?
 */
const codeConundrum1 = () => {
  const fs = require('fs');
  const text = fs.readFileSync('./input.txt', { encoding: 'utf8', flag: 'r' });
  const textByLine = text.split('\n');

  let sum = 0;
  for (const line of textByLine) {
    const replaced = line.replace(/[,:;]/g, "")
    const split = replaced.split(' ');
    const gameId = split[1];
    let isValid = true;
    for (let i = 3; i < split.length; i += 2) {
      if (split[i] === "red" && Number(split[i - 1]) > 12
        || split[i] === "green" && Number(split[i - 1]) > 13
        || split[i] === "blue" && Number(split[i - 1]) > 14
      ) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      sum += Number(gameId);
    }
  }
  console.log({ sum });
};

codeConundrum1();
