'use strict';

{
  // const getAveragePriceGoods = arr => {
  //   let count = 0;
  //   let sum = 0;

  //   for (const elem of arr) {
  //     count += elem[0];
  //     sum += elem[1];
  //   }

  //   return sum / count;
  // }

  const getAveragePriceGoods = arr =>
    arr.reduce(([accCount, accSum], [count, sum]) =>
      [accCount + count, accSum + sum]).reduce((accCount, accSum) =>
      accSum / accCount);

  const allCashbox = [ // [43, 32700]
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370],
  ];

  console.log(getAveragePriceGoods(allCashbox));
}
