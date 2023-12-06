/**
 * There's really only one race - ignore the spaces between the numbers on each line.
 * Now, you have to figure out how many ways there are to win this single race.
 */
const boatRace2 = (inputFile) => {
  const fs = require('fs');
  const text = fs.readFileSync(inputFile, { encoding: 'utf8', flag: 'r' });
  const valsByLine = text.split('\n').map(line => line.replace(/ /g, '')).flatMap(line => line.match(/\d+/g));
  const { [0]: time, [1]: distance } = valsByLine;

  // since losses are mirrored, count until you win then 
  // double your losses and subtract from total time
  let losingPossibilites = 0;
  for (let speed = 0; speed <= time; speed++) {
    const curDistance = speed * (time - speed);
    if (curDistance < distance) {
      losingPossibilites++;
    } else {
      // add 1 to account for 0 case
      return time - (losingPossibilites * 2) + 1;
    }
  }

}

console.log(boatRace2('input.txt'));
