'use strict';

const modifyStr = str => {
  const newStr = str.trim().toLowerCase();
  return newStr[0].toUpperCase() + newStr.substring(1);
};

console.log(modifyStr('       пПРОВЕРКАuuПРоверКА'));
