'use strict'

const modifyStr = str => {
  const newStr = str[0].toUpperCase() + str.substring(1).toLowerCase();
  console.log(newStr);
}

modifyStr('проверка ПРОВЕРКА ПРоверКА');