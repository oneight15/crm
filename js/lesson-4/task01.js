'use strict'

const convert = euroPrice => {
  const dollarPrice = euroPrice * 1.2;
  const rubPrice = dollarPrice * 73;
  console.log(`Стоимость покупки в рублях равна ${rubPrice}`);
}

convert(100);