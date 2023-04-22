'use strict';

const isPrime = n => {
  let k = 0;
  if (n > 1) {
    for (let i = 1; i <= n; i++) {
      if (!(n % i)) {
        k++;
      }
    }
  } else {
    return false;
  }

  if (k > 2) {
    return false;
  }

  return true;
};

// console.log(isPrime(151));
// console.log(isPrime(911));
// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(100));
// console.log(isPrime(77));


// упрощенный вариант решения
// const isPrime = n => {
//   for (let i = 2; i <= Math.round(Math.sqrt(n)); i++) {
//     if (!(n % i)) {
//       return false;
//     }
//   }
//   return n > 1;
// }


for (let i = -100, count = 0; i < 542; i++) {
  isPrime(i) && console.log(`${++count}) - ${i}.`);
}
