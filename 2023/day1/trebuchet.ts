/**
 * Part 1: 
 * On each line, the calibration value can be found by combining the first digit
 * and the last digit (in that order) to form a single two-digit number. 
 * What is the sum of all of the calibration values?
 * 
 * Part 2:
 * Some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine 
 * also count as valid "digits". You now need to find the real first and last digit on each line.
 */
const trebuchet = () => {
  const fs = require('fs');
  const text = fs.readFileSync('./input.txt', { encoding: 'utf8', flag: 'r' });
  const textByLine = text.split('\n')

  let sum = 0;
  for (const line of textByLine) {
    // Any number that ends with a letter another number starts with must be
    // replaced before the number with that starting letter.
    // However, this creates a loop ('one' -> 'eight' -> 'two' -> 'one'). So start off with 
    // replacing 'oneight' with '1'.
    let replaced = line.replace(/oneight/g, '1');
    replaced = replaced.replace(/five/g, '5');
    replaced = replaced.replace(/eight/g, '8');
    replaced = replaced.replace(/two/g, '2');
    replaced = replaced.replace(/one/g, '1');
    replaced = replaced.replace(/three/g, '3');
    replaced = replaced.replace(/four/g, '4');
    replaced = replaced.replace(/six/g, '6');
    replaced = replaced.replace(/seven/g, '7');
    replaced = replaced.replace(/nine/g, '9');
    let num1 = '';
    let num2 = '';
    for (let i = 0; i < replaced.length; i++) {
      if (!num1 && !isNaN(replaced[i])) {
        num1 = replaced[i];
      }
      if (!num2 && !isNaN(replaced[replaced.length - i - 1])) {
        num2 = replaced[replaced.length - i - 1];
      }
      if (num1 && num2) {
        sum += Number(`${num1}${num2}`);
        break;
      }
    }
  }
  console.log({sum})
}

trebuchet();