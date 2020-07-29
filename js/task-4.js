const formatString = function (string) {
  let limitSymbols = 40;
  let correctedSting;
  console.log(string);
  if (string.length > limitSymbols) {
    correctedSting = string.substr(0, 40) + '...';
    return correctedSting;
  } else {
    return string;
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
