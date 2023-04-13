/**
 * @param {number} num
 * @return {boolean}
 */
// let num = 16;
let arr1 = [];
let arr;
// num = 14;
num = 2000105819;

middleSquare = function (num) {
  return num * num;
};
var isPerfectSquare = function (num) {
  // arr = arrCreate(num);
  // console.log(arr);
  // return search(arr, num);
  start = 1;
  end = num;

  while (start <= end) {
    middle = Math.trunc((start + end) / 2);

    middleCheck = middleSquare(middle);
    console.log(middle);
    if (middleCheck === num) {
      return true;
    }
    if (middleCheck < num) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return false;
};

value = isPerfectSquare(num);
console.log(value);
