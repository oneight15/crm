'use strict';

const getRandomArr = (x, n = 0, m = 0, str) => {
  const randomArr = [];
  const max = Math.max(n, m);
  const min = Math.min(n, m);

  while (x > randomArr.length) {
    const randomItem = Math.floor(Math.random() * (max - min + 1) + min);

    switch (str) {
      case 'even':
        if (randomItem % 2 === 0) {
          randomArr.push(randomItem);
        }
        break;

      case 'odd':
        if (randomItem % 2 !== 0) {
          randomArr.push(randomItem);
        }
        break;

      default:
        randomArr.push(randomItem);
    }
  }
  return randomArr;
}

console.log(getRandomArr(99, -10, 10, 'odd'));

