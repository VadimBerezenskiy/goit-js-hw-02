const findLongestWord = function (string) {
  const stringArray = Array.from(string.split(' '));
  let longestWord = 0;
  let word = null;
  for (let i = 0; i < stringArray.length; i += 1) {
    // console.log(stringArray[i].length);
    if (stringArray[i].length > longestWord) {
      stringArray[i].indexOf(stringArray[i].length);
      longestWord = stringArray[i].length;
      word = stringArray[i];
    }
  }
  return word;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));
