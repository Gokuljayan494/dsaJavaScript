/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
nums = [-1, 0, 3, 5, 9, 12];
let target = 9;
let start = 0;
let end = nums.length - 1;
var search = function (nums, target, start, end) {
  while (start < end) {
    middle = Math.trunc((start + end) / 2);
    console.log(start, end);
    console.log(`middle ${middle}`);
    if (target > nums[middle]) {
      start = middle + 1;
    }
    if (target < nums[middle]) {
      end = middle - 1;
    }
    if (target === nums[middle]) {
      console.log(`hey`);
      return middle;
    }
    console.log(middle);
  }
};

value = search(nums, 9, start, end);
console.log(`value:${value}`);
