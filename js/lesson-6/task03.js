'use strict';

const addPrefix = (arr, str) => {
  const arrWithPrefix = [];
  for (const elem of arr) {
    arrWithPrefix.push(str + ' ' + elem);
  }
  return arrWithPrefix;
}

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

console.log(addPrefix(names, 'Mr'));