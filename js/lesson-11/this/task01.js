'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  set height(height) {
    if (typeof height === 'number') {
      this._height = height;
    }
  },

  set width(width) {
    if (typeof width === 'number') {
      this._width = width;
    }
  },

  get perimeter() {
    return `${(this._width + this._height) * 2}см`;
  },

  get area() {
    return `${this._width * this._height}см`;
  },
};

console.log(rectangle.perimeter);
console.log(rectangle.area);

rectangle.height = 12;
rectangle.width = 7;

console.log(rectangle.perimeter);
console.log(rectangle.area);
