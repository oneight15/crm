'use strict';

// const addPrefix = (arr, prefix) => {
//   const arrWithPrefix = [];

//   for (const elem of arr) {
//     arrWithPrefix.push(prefix + ' ' + elem);
//   }

//   return arrWithPrefix;
// }

const addPrefix = (arr, prefix) => arr.map(item => prefix + ' ' + item);

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William',
  'Ethan', 'Michael', 'Alexander'];

console.log(addPrefix(names, 'Mr'));
