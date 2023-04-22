'use strict';

const calculate = (sum, count, promo) => {
  let price = sum;
  if (count > 10) {
    price *= 0.97;
  }

  if (price > 30000) {
    price -= (price - 30000) * 0.15;
  }

  if (promo === 'METHED') {
    price *= 0.9;
  }

  if (promo === 'G3H2Z1' && price > 2000) {
    price -= 500;
  }

  return price;
};

console.log(calculate(60000, 11, 'G3H2Z1'));
