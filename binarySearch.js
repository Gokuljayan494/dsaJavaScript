// const arr = [1, 2, 3, 44, 55, 666, 777, 8888];
// const target = 1;
// let start = 0;
// let end = arr.length - 1;
// // console.log(arr.length);

// const binarySearch = function (arr, target) {
//   for (start; start <= end; start++) {
//     // 1 check the middle element

//     middleElemnt = Math.trunc(start + (end - start) / 2);
//     console.log(arr[middleElemnt]);
//     // 2 check target > middle || target < middle || target ===middle

//     // 666 > 3

//     if (target > arr[middleElemnt]) {
//       start = middleElemnt + 1;

//       //   then start will change from 0 - 4

//       console.log(`start at 1`);
//     }
//     if (target < arr[middleElemnt]) {
//       end = middleElemnt - 1;
//     }
//     if (target === arr[middleElemnt]) {
//       return middleElemnt;
//     }
//     start = start - 1;
//   }
//   return -1;
// };

// const value = binarySearch(arr, target);

// console.log(`value ${value}`);
// const arr = [33, 4, 3, 2];
// let target = 33;
// let start = 0;

// let end = arr.length - 1;
// const binary = function (arr, target) {
//   for (start; start <= end; start++) {
//     middleElemnt = Math.trunc(start + (end - start) / 2);
//     if (target < arr[middleElemnt]) {
//       start = middleElemnt + 1;
//     }
//     if (target > arr[middleElemnt]) {
//       end = middleElemnt - 1;
//     }
//     if (target === arr[middleElemnt]) {
//       return middleElemnt;
//     }
//     start = start - 1;
//   }
//   return -1;
// };
// const values = binary(arr, target);

// console.log(values);

// const arr = [34, 3, 2, 1];

// start = 0;
// end = arr.length;
// target = 1;

// const descendingOrder = function (arr, target) {
//   for (start; start <= end; start++) {
//     // find the middle value

//     middleValue = Math.trunc(start + (end - start) / 2);

//     // find start>end || start<end || start===end
//     if (target > arr[middleValue]) {
//       end = middleValue - 1;
//     }
//     if (target < arr[middleValue]) {
//       start = middleValue + 1;
//     }
//     if (target === arr[middleValue]) {
//       return middleValue;
//     }
//     start = start - 1;
//   }
//   return -1;
// };

// const ascendingOrder = function (arr, target) {
//   for (start; start <= end; start++) {
//     // find the middle value

//     middleValue = Math.trunc(start + (end - start) / 2);
//     // middleValue = start + end / 2;
//     // find start>end || start<end || start===end
//     if (target < arr[middleValue]) {
//       end = middleValue - 1;
//     }
//     if (target > arr[middleValue]) {
//       start = middleValue + 1;
//     }
//     if (target === arr[middleValue]) {
//       return middleValue;
//     }
//     start = start - 1;
//   }
//   return -1;
// };

// if (arr[start] > arr[end]) {
//   const value = descendingOrder(arr, target);
//   console.log(`value :${value}`);
// } else {
//   const value = ascendingOrder(arr, target);
//   console.log(`value :${value}`);
// }

// target = 2;

const arr = [1, 2, 3, 4, 5, 55, 66, 77];
