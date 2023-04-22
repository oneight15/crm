'use strict';

const getRandomArr = x => {
  const randomArr = [];

  while (x > randomArr.length) {
    randomArr.push(Math.round(Math.random() * 100));
  }

  return randomArr;
};

console.log(getRandomArr(15));
