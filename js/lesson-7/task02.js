'use strict';

const getRandomArr = (x, n = 0, m = 0) => {
  const randomArr = [];

  while (x > randomArr.length) {
    randomArr.push(Math.floor(Math.random() * (m - n + 1)) + n);
  }

  return randomArr;
}

console.log(getRandomArr(25, 5, -5));