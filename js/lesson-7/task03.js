'use strict';

const getRandomArr = (x, n = 0, m = 0, str) => {
  const randomArr = [];
  const max = Math.max(n, m);
  const min = Math.min(n, m);

  // while (x > randomArr.length) {
  //   const randomItem = Math.floor(Math.random() * (max - min + 1) + min);

  //   // if (str === 'even') {
  //   //   randomArr.push(Math.floor(randomItem / 2) * 2);
  //   // } else if (str === 'odd') {
  //   //   randomArr.push((Math.floor(randomItem / 2) * 2) + 1);
  //   // } else {
  //   //   randomArr.push(randomItem);
  //   // }



  //   switch (str) {
  //     case 'even':
  //       while (randomItem % 2 !== 0) {

  //       }
  //       return randomArr.push(Math.floor(randomItem / 2) * 2);
  //       break;
  //     case 'odd':
  //       return randomArr.push((Math.floor(randomItem / 2) * 2) + 1);
  //       break;
  //     default:
  //       console.log('qeqweqw');
  //   }

    
  // }

  return randomArr;

  
}

console.log(getRandomArr(99, 11, -11, 'even'));

