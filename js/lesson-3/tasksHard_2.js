'use strict'

let tax = 0;
const stepMin = 15000;
const stepMax = 50000;
const profit2 = +prompt('Укажите сумму дохода:');
let balance = profit2;

if (balance > stepMax) {
  tax = (balance - stepMax) * 0.3;
  balance = stepMax;
}

if (balance >= stepMin) {
  tax += (balance - stepMin) * 0.2;
  balance = stepMin;
}

if (balance > 0) {
  tax += balance * 0.13;
}

console.log(`Сумма налога составляет: ${tax}`);