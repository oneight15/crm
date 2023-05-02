'use strict';

const epmtyArr = [];
const fibo = [0, 1, 1, 2, 3, 5, 8, 13];

const getSomeArr = arr => (arr.reduce((sum, item) => sum + item, 0) > 50 ?
  [...arr] : getSomeArr([...arr, Math.round(Math.random() * 10)]));

console.log(getSomeArr(epmtyArr));
console.log(getSomeArr(fibo));
