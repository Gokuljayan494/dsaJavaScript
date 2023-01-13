const arr = [1, 3, 4, 5, 6, 8, 9, 11, 12, 13];
let start = 0;
let end = arr.length - 1;
const target = 7;
let middleElemnt = 0;

const celing = function (arr, target) {
  for (start; start <= end; start++) {
    //  find the middle value

    middleElemnt = Math.trunc((start + end) / 2);

    //   target > middleElemnt || target < middleElemnt || target === middleElemnt
    if (target > arr[middleElemnt]) {
      start = middleElemnt + 1;
    }
    if (target < arr[middleElemnt]) {
      end = middleElemnt - 1;
    }
    if (target === arr[middleElemnt]) {
      return middleElemnt;
    }
    start = start - 1;
    // console.log(middleElemnt[start]);
  }
  return start;
};
let value = celing(arr, target);
console.log(`${arr[value]}`);
