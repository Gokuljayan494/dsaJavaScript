// const arr = [2, 3, 4, 5, 6, 7, 78, 787];
// const target = 6;
// let newStart = 0;
// let start = 0;
// let end = 1;
// let condition = function (start, end, target) {
//   while (target > arr[end]) {
//     newStart = end + 1;
//     end = end + (end - start + 1) * 2;
//     start = newStart;
//   }
//   return binarySearch(start, target, end, arr);
// };

// const binarySearch = function (start, target, end, arr) {
//   for (start; start <= end; start++) {
//     middleValue = Math.trunc(start + end / 2);
//     if (target > arr[middleValue]) {
//       start = middleValue + 1;
//     }
//     if (target < arr[middleValue]) {
//       end = middleValue - 1;
//     } else {
//       return middleValue;
//     }
//   }
//   return -1;
// };
// let value = condition(start, end, target);

// console.log(`value : ${value}`);
