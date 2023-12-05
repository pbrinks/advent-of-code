/**
 * Copies of scratchcards are scored like normal scratchcards and have the same card
 * number as the card they copied. So, if you win a copy of card 10 and it has 5 
 * matching numbers, it would then win a copy of the same cards that the original 
 * card 10 won: cards 11, 12, 13, 14, and 15. This process repeats until none of the 
 * copies cause you to win any more cards. (Cards will never make you copy a card past 
 * the end of the table.)
 * Process all of the original and copied scratchcards until no more scratchcards are won. 
 * Including the original set of scratchcards, how many total scratchcards do you end up with?
 */
const scratchcards2 = (inputFile) => {
  const fs = require('fs');
  const text = fs.readFileSync(inputFile, { encoding: 'utf8', flag: 'r' });
  const textByLine = text.split('\n');

  const lineMap = new Map()
  textByLine.forEach((line, index) => {
    lineMap.set(index, 1);
  }, {})

  return textByLine.reduce((acc, line, index) => {
    const lineCount = lineMap.get(index);
    const split = line.split(/[:\|]/);
    const winningNumbers = [...split[1].matchAll(/\d+/g)].map(num => num[0]);
    const lineSum = [...split[2].matchAll(/\d+/g)].map(num => num[0]).reduce((acc, cur) => {
      if (winningNumbers.includes(cur)) {
        return acc + 1;
      }
      return acc;
    }, 0);

    for (let j = 0; j < lineSum; j++) {
      const updateIndex = index + j + 1;
      lineMap.set(updateIndex, lineMap.get(updateIndex) + lineCount);
    }
    return acc + lineCount;
  }, 0);
}

console.log(scratchcards2('input.txt'));
