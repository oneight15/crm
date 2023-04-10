'use strict';

const getRandomArr = (x, n = 0, m = 0) => {
  const randomArr = [];
  const max = Math.max(n, m);
  const min = Math.min(n, m);
  
  while (x > randomArr.length) {
    randomArr.push(Math.floor(Math.random() * (max - min + 1) + min));
  }

  return randomArr;
}

console.log(getRandomArr(99, -5, 5));
console.log(getRandomArr(99, 5, -5));