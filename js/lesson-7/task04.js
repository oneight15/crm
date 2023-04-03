'use strict';

const getLeapYearArr = (n , m) => {
  const leapYearArr = [];

  if (m < n) {
    for (let i = m; i <= n; i++) {
      if (!(i % 4)) {
        leapYearArr.push(i);
      }
    }
  } else {
    for (let i = n; i <= m; i++) {
      if (!(i % 4)) {
        leapYearArr.push(i);
      }
    }
  }

  return leapYearArr;
}

console.log(getLeapYearArr(2024, 2000));