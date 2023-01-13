const arr = [1, 2, 1, 2, 3, 1];
start = 0;
target = 2;
end = arr.length - 1;
let ans = 0;
let middleValue = 0;
const search = function (arr, target) {
  for (start; start <= end; start++) {
    middleValue = Math.trunc(start + end) / 2;
    ////////////////////////
    if (target > arr[middleValue]) {
      start = middleValue + 1;
    }
    if (target < arr[middleValue]) {
      end = middleValue - 1;
    }
    if (target === arr[middleValue]) {
      for (start = 0; start <= end; start++) {
        end = middleValue - 1;
        if (target > arr[middleValue]) {
          start = middleValue + 1;
        }
        if (target < arr[middleValue]) {
          end = middleValue - 1;
          console.log(end);
        } else {
          console.log(`end ${end}`);
          ans = middleValue;
          return ans;
        }
      }
      ans = end;
    }
  }
  return ans;
};

let values = search(arr, target);
console.log(values);
