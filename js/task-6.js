let input;
const numbers = [];
let total = 0;
do {
  input = prompt('Введите число!');
  input = Number(input);
  if (Number.isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    break;
  }
  numbers.push(input);
} while (input !== 0);
function sumNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
}
sumNumbers(numbers);
console.log(`Общая сумма чисел равна ${total}`);
