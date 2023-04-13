let nums = [2, 3, 5, 1];
var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    middle = Math.trunc((start + end) / 2);
    if (nums.length - 1 === 0) {
      return nums[start];
    }
    if (nums[middle] > nums[middle + 1]) {
      return nums[middle + 1];
    }
    if (nums[middle] < nums[middle - 1]) {
      return nums[middle];
    }
    if (nums[start] < nums[end]) {
      return nums[start];
    }
    if (nums[start] < nums[middle]) {
      // seacrh in right side
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
};

value = findMin(nums);
console.log(value);
