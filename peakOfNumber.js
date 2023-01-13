const arr = [1, 2, 3, 6, 7, 8, 12, 3, 2, 1];
let start = 0;
let end = arr.length - 1;

let middleValue = 0;
const peakFunction = function (start, end, arr, middleValue) {
  while (start <= end) {
    // middle value
    middleValue = Math.trunc(start + end / 2);
    console.log(`middleValue:${middleValue}`);
    // console.log(middleValue);
    if (arr[middleValue] > arr[middleValue + 1]) {
      end = middleValue;
    }
    if (arr[middleValue] < arr[middleValue + 1]) {
      start = middleValue + 1;
    } else {
      // console.log(`value :${middleValue}`);
      //   console.log(middleValue);
      return arr[middleValue];
    }
  }
};
let values = peakFunction(start, end, arr, middleValue);
console.log(values);
