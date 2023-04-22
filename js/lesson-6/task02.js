'use strict';

// const getAverageValue = arr => {
//   let sum = 0;

//   for (const num of arr) {
//     sum += num;
//   }

//   return Math.floor(sum / arr.length);
// }

const getAverageValue = arr =>
  Math.floor(arr.reduce((acc, cash) => acc + cash, 0) / arr.length);

const allCashbox = [4500, 3210, 650, 1250, 7830, 990,
  13900, 370]; // AverageValue = 4087.5
console.log(getAverageValue(allCashbox));
