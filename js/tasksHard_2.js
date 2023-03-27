'use strict'

const newProfit = +prompt('Укажите сумму дохода:');

if (newProfit < 15000) {
  console.log(`Сумма налога составляет: ${newProfit * 0.13}`);
}

if (newProfit >= 15000 && newProfit < 50000) {
  console.log(`Сумма налога составляет: ${15000 * 0.13 + (newProfit - 15000) * 0.2}`);
}

if (newProfit >= 50000) {
  console.log(`Сумма налога составляет: ${15000 * 0.13 + 35000 * 0.2 + (newProfit - 50000) * 0.3}`);
}