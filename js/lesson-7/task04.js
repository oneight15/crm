'use strict';

const getLeapYearArr = (n , m) => {
  const leapYearArr = [];
  const max = Math.max(n, m);
  const min = Math.min(n, m);

  for (let i = min; i <= max; i++) {
    if (((i % 4 === 0 ) && (i % 100 !== 0)) || (i % 400 === 0)) {
      leapYearArr.push(i);
    }
  }
  
  return leapYearArr;
}

console.log(getLeapYearArr(2400, 1600));