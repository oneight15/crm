'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  add(itemName, itemPrice, itemCount = 1) {
    const item = {};
    item.name = itemName;
    item.price = itemPrice;
    item.count = itemCount;
    this.items.push(item);
    this.calculateItemPrice();
    this.count += item[Object.keys(item)[2]];
  },
  increaseCount(n) {
    this.count += n;
  },
  calculateItemPrice() {
    const priceValue = this.items.flatMap(item => item[Object.keys(item)[1]] * item[Object.keys(item)[2]])
    this.totalPrice = priceValue.reduce((sum, elem) => sum + elem, 0);
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: ${this.getTotalPrice()}`);
  },
}

console.log('общая сумма корзины:', cart.getTotalPrice());
console.log('общее количество товаров:', cart.count);
console.log('____________________________________________');

cart.add('мышка', 700, 5);
console.log('общая сумма корзины:', cart.getTotalPrice());
console.log('общее количество товаров:', cart.count);
console.log('____________________________________________');

cart.add('клавиатура', 600, 7);
console.log('общая сумма корзины:', cart.getTotalPrice());
console.log('общее количество товаров:', cart.count);
console.log('____________________________________________');

cart.add('монитор', 44000, 2);
console.log('общая сумма корзины:', cart.getTotalPrice());
console.log('общее количество товаров:', cart.count);
console.log('____________________________________________');

cart.add('ноутбук', 17000, 3);
console.log('общая сумма корзины:', cart.getTotalPrice());
console.log('общее количество товаров:', cart.count);
console.log('____________________________________________');

cart.print();
