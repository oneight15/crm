'use strict';

const reverseStr = str => {
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

const reverse = str => str.split('').reverse().join('');

console.log(reverseStr('Привет мир'));
console.log(reverse('Абракадабра'));
