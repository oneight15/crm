'use strict';

const isPrime = n => {
  let k = 0;

  for (let i = 1; i <= n; i++) {
    if (!(n % i)) {
      k++;
    }
  }

  if (k > 2) {
    return `${n} - не простое число`
  }

  return `${n} - простое число`;
}

console.log(isPrime(151));
console.log(isPrime(911));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(100));
console.log(isPrime(77));


