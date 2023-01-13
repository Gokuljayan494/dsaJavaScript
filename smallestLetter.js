const arr = ["a", "b", "c", "j"];
let target = "j";
let start = 0;
let end = arr.length - 1;
let middleValue = 0;
const smallestLetter = function (arr, target) {
  for (start; start <= end; start++) {
    //  middleValue
    middleValue = Math.trunc(start + (end - start / 2));
    //  target>middleValue ||targer<middleValue
    if (target > arr[middleValue]) {
      //   start = middleValue + 1;
    }
    if (target < arr[middleValue]) {
      end = middleValue - 1;
    }
    // start = start - 1;
    console.log(start);
  }
  return arr[start % arr.length];
};

let value = smallestLetter(arr, target);
console.log(value);
