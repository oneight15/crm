'use strict';

const getRandomArr = (x, n = 0, m = 0, str) => {
  const randomArr = [];

  while (x > randomArr.length) {
    randomArr.push(Math.floor(Math.random() * (m - n + 1)) + n);
  }

  switch (str) {
    case 'even':
      return randomArr.map(item => item % 2 ? item + 1 : item);
      break;
    case 'odd':
      return randomArr.map(item => item % 2 ? item : item + 1);
      break;
    default:
      return randomArr;
  }
}

console.log(getRandomArr(15, -10, 10, 'even'));
console.log(getRandomArr(15, -10, 10, 'odd'));
console.log(getRandomArr(15, -10, 10, '123'));
