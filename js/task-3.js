const findLongestWord = function (string) {
  const stringEdit = string.split(' ');
  let longestWord = 0;
  let word;
  for (let i = 0; i < stringEdit.length; i += 1) {
    // console.log(stringEdit[i].length);
    if (stringEdit[i].length > longestWord) {
      longestWord = stringEdit[i].length;
      word = stringEdit[i];
    }
  }
  return word;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));
