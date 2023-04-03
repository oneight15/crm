'use strict';

const getLeapYearArr = (n , m) => {
  const leapYearArr = [];

  for (let i = n; i < m; i++) {
    if (i % 4)
    leapYearArr.push(Math.floor(Math.random() * (m - n + 1)) + n);
  }

  return leapYearArr;
}

console.log(getLeapYearArr(25, 5));