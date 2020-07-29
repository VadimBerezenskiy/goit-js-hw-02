let input;
const numbers = [];
let total = 0;
let cancel;
do {
  input = prompt('Введите число!');
  if (input === null) {
    input = cancel;
    break;
  }
  input = Number(input);
  if (Number.isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    break;
  }
  numbers.push(input);
  console.log(numbers);
} while (input !== cancel);
function sumNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
}
sumNumbers(numbers);
console.log(`Общая сумма чисел равна ${total}`);
