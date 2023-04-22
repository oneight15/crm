'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  add(name, price, count = 1) {
    this.items.push({name, price, count});
    this.increaseCount(count);
  },

  increaseCount(n) {
    this.count += n;
  },

  calculateItemPrice() {
    const basketPrice = this.items.reduce((sum, {price, count}) =>
      sum + price * count, 0);

    return this.discount ?
      basketPrice * (1 - this.discount / 100) : basketPrice;
  },

  set setDiscount(promocode) {
    switch (promocode) {
      case 'METHED':
        this.discount = 15;
        break;

      case 'NEWYEAR':
        this.discount = 21;
        break;

      default:
        this.discount = 0;
        break;
    }
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: ${this.totalPrice}`);
  },
};

cart.add('мышка', 700, 5);
cart.add('клавиатура', 600, 7);
cart.add('монитор', 44000, 2);

console.log('размер скидки:', cart.discount);
console.log('общая сумма корзины:', cart.totalPrice);

cart.setDiscount = 'NEWYEAR';

console.log('размер скидки:', cart.discount);
console.log('общая сумма корзины:', cart.totalPrice);

cart.setDiscount = 'METHED';

console.log('размер скидки:', cart.discount);
console.log('общая сумма корзины:', cart.totalPrice);
