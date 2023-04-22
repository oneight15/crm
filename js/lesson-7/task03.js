'use strict';

const getRandomArr = (x, n = 0, m = 0, str) => {
  const randomArr = [];
  const rules = ['even', 'odd'].indexOf(str.trim().toLowerCase());
  const max = Math.max(n, m);
  const min = Math.min(n, m);

  while (x > randomArr.length) {
    const randomItem = Math.floor(Math.random() * (max - min + 1) + min);

    if (rules === -1 || rules === Math.abs(randomItem % 2)) {
      randomArr.push(randomItem);
    }
  }

  return randomArr;
};

console.log(getRandomArr(99, -11, 11, '123'));

