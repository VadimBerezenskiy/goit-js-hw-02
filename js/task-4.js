const formatString = function (string) {
  const stringArray = Array.from(string);
  let limitSymbols = 40;
  let correctedSting;
  let stringFixed;
  // console.log(stringArray);
  {
    if (stringArray.length > limitSymbols) {
      correctedSting = stringArray.slice(0, 40);
      correctedSting.splice(40, 0, '.', '.', '.');
      correctedSting = correctedSting.join('');
      return correctedSting;
    } else {
      stringFixed = stringArray.join('');
      return stringFixed;
    }
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
