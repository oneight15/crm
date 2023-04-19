'use strict';

const rectangle = {
  initWidth: 5,
  initHeight: 5,

  set height(height) {
    if (typeof height === 'number') {
      this.initHeight = height;
    }
  },

  set width(width) {
    if (typeof width === 'number') {
      this.initWidth = width;
    }
  },

  get perimeter() {
    return `${(this.initWidth + this.initHeight) * 2}см`;
  },

  get area() {
    return `${this.initWidth * this.initHeight}см`;
  },
};

console.log(rectangle.perimeter);
console.log(rectangle.area);

rectangle.height = 12;
rectangle.width = 7;

console.log(rectangle.perimeter);
console.log(rectangle.area);
