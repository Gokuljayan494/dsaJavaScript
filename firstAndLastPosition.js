// arr = [1, 2, 2, 3, 3];
nums = [5, 7, 7, 8, 8, 10];
// nums = [1];
// nums = [1, 3];
target = 10;
// nums = [1, 3];
// nums = [2, 2];
// nums = [1, 3];
// target = 0;
// start = 0;
// end = nums.length - 1;
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [bSearch(nums, target, true), bSearch(nums, target, false)];
};

const bSearch = (A, t, findLowest) => {
  let index = -1;
  let lo = 0;
  let hi = A.length - 1;
  while (lo <= hi) {
    const mid = hi - ~~((hi - lo) / 2);
    if (A[mid] === t) {
      // if findLowest ? continue to left : continue to right
      if (findLowest) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
      index = mid;
    } else if (A[mid] < t) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return index;
};
value = searchRange(nums, target);
console.log(value);
