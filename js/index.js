'use strict'

const nameProduct = 'brick';
const countProduct = 100;
const categoryProduct = 'building';
const priceProduct = 12;

// console.log('Наименование товара: ', nameProduct);

const sumProduct = countProduct * priceProduct;
// console.log('Общая сумма товара: ', sumProduct);

const nameUserProduct = prompt('Введите наименование товара');
const countUserProduct = +(prompt('Введите количество товара'));
const categoryUserProduct = prompt('Введите категорию товара');
const priceUserProduct = +(prompt('Введите цену товара'));
const sumUserProduct = countUserProduct * priceUserProduct;

// console.log(typeof nameUserProduct)
// console.log(typeof countUserProduct)
// console.log(typeof categoryUserProduct)
// console.log(typeof priceUserProduct)

if (Number.isNaN(countUserProduct) || Number.isNaN(priceUserProduct)) {
  console.log('Вы ввели некорректные данные');
} else { 
  console.log(`На складе ${countUserProduct} единицы товара ${nameUserProduct} на сумму ${sumUserProduct} деревянных`);
}

