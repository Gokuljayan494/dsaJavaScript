const arr = [1, 3, 4, 5, 7];

let start = 0;
let end = arr.length - 1;
let target = 6;
let middleElement = 0;
const floor = function (arr, target) {
  for (start; start <= end; start++) {
    // middleElement
    middleElement = start + (end - start / 2);
    //    target>start || target<start || start===target
    if (target > arr[middleElement]) {
      start = target + 1;
    }
    if (target < arr[middleElement]) {
      end = middleElement - 1;
    }
    if (target === arr[middleElement]) {
      return -1;
    }
    start = start - 1;
  }
  return end;
};

let value = floor(arr, target);

console.log(value);
