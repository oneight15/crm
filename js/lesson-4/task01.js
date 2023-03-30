'use strict'

const convert = euroPrice => {
  const dollarPrice = euroPrice * 1.2;
  const rubPrice = dollarPrice * 73;
  return `Стоимость покупки в рублях равна ${rubPrice}`;
}

console.log(convert(100));