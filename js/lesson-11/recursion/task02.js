'use strict';

const getSomeArr = arr => {
  arr.push(Math.round(Math.random() * 10));
  const sum = arr.reduce((item, sum) => item + sum, 0);

  if (sum > 50) {
    return arr;
  }

  return getSomeArr(arr);
};

const epmtyArr = [];
const fibo = [0, 1, 1, 2, 3, 5, 8, 13];

console.log(getSomeArr(epmtyArr));
console.log(getSomeArr(fibo));
