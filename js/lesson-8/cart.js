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

  },
  increaseCount(n) {
    this.count += n;
  },
  calculateItemPrice() {

  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {

  },
}