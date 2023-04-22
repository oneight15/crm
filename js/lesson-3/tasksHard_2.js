'use strict';

{
  const profit = +prompt('Укажите сумму дохода:');
  let tax = 0;
  let balance = profit;

  if (balance > 50000) {
    tax = (balance - 50000) * 0.3;
    balance = 50000;
  }

  if (balance > 15000) {
    tax += (balance - 15000) * 0.2;
    balance = 15000;
  }

  if (balance > 0) {
    tax += (balance - 0) * 0.13;
    balance = 0;
  }

  console.log(`Сумма налога составляет: ${tax}`);
}
