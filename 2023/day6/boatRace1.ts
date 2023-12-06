/**
 * Determine the number of ways you can beat the record in each race,
 * and multiply them together
 */
const boatRace1 = (inputFile) => {
  const fs = require('fs');
  const text = fs.readFileSync(inputFile, { encoding: 'utf8', flag: 'r' });
  const valsByLine = text.split('\n').map(line => line.match(/\d+/g));
  const { [0]: times, [1]: distances } = valsByLine;

  return times.reduce((acc, time, index) => {
    let winningPossibilities = 0;
    for (let speed = 0; speed <= time; speed++) {
      const distance = speed * (time - speed);
      if (distance > distances[index]) {
        winningPossibilities++;
      }
    }
    return acc * winningPossibilities;
  }, 1);
}


console.log(boatRace1('input.txt'));

// 1159152