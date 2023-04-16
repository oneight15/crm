'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return this.totalPrice;
  },

  add(name, price, count = 1) {
    this.items.push({name, price, count});
    this.calculateItemPrice();
    this.increaseCount(count);
  },

  increaseCount(n) {
    this.count += n;
  },

  calculateItemPrice() {
    this.totalPrice = this.items.reduce((sum, {price, count}) => sum + price * count, 0);
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
