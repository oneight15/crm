'use strict';

// Модуль 4 Урок 3 - Вторая задача

const rain = Math.round((Math.random()).toFixed(1));
// console.log(rain);

if (rain === 1) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else {
  console.log('Дождя нет!');
}

// Модуль 4 Урок 3 - Третья задача

const passGrade = 265;
const studMarkMath = prompt('Введите кол-во баллов по математике:');
const studMarkRussian = prompt('Введите кол-во баллов по русскому языку:');
const studMarkComputing = prompt('Введите кол-во баллов по информатике:');
const studentGrade = +studMarkMath + +studMarkRussian + +studMarkComputing;

if (studentGrade >= passGrade) {
  console.log('Поздравляю, вы поступили на бюджет!');
} else {
  console.log('Добро пожаловать на завод!');
}

// Модуль 4 Урок 3 - Четвёртая задача

const cashOut = prompt('Cколько денег Вы хотите снять?');

if (Number.isInteger(+cashOut / 100)) {
  console.log('Выдаю деньги...');
} else {
  console.log('Введите сумму кратную 100 рублям');
}
