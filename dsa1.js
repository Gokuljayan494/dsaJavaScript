// let count = 0;
// let valueCount = 0;
// // let arr = [3, 443, 3, 22, 34, 55, 4];
// let arr = [13, 1, 272, 192, 2121];

// let checkDigit = function (num) {
//   // return count;
//   //  if num =3
//   // console.log(`num:${num}`);
//   for (num; num > 0; num--) {
//     count++;
//     num = Math.trunc(num / 10 + 1);
//     // console.log(`trunc value:${num}`);
//     // console.log(num);
//   }
//   return count;
// };

// let arrayFunction = function (arr) {
//   for (i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     let values = checkDigit(arr[i]);
//     console.log(`array ${arr[i]}: ${values}`);
//     count = 0;
//   }
// };
// arrayFunction(arr);

// /*

// here we will count the digits in a number

// eg:123=digit:3
// 12:digit:2

// for  this to count A digit we use a equation

// while(n>0){
//   count++
//   n=n/10

// }
// */

// richest
// let arr = [
//   [1, 2],
//   [12, 2],
// ];
// let matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ];
// const target = 3;
// // Output: true
// for (i = 0; i < matrix.length; i++) {
//   for (j = 0; j < matrix[i].length; j++) {
//     if (matrix[i][j] === target) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;
var searchMatrix = function (matrix, target) {
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      // if (matrix[i][j] === target) {
      //   return true;
      // } else {
      //   return false;
      // }
      if (matrix[i][j] === target) {
        return true;
      } else {
        return false;
      }
    }
  }
};
const value = searchMatrix(matrix, target);
console.log(value);
