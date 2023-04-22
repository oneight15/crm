'use strict';

{
  const profit = +prompt('Укажите сумму дохода:');

  if (profit < 15000) {
    console.log(`Сумма налога составляет: ${profit * 0.13}`);
  }

  if (profit >= 15000 && profit < 50000) {
    console.log(`Сумма налога составляет: ${profit * 0.2}`);
  }

  if (profit >= 50000) {
    console.log(`Сумма налога составляет: ${profit * 0.3}`);
  }
}
