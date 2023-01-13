nums = [0, 0, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4];
target = 3;
console.log(nums.length - 1);
binaryInRight = function (nums, start, end, target) {
  while (start <= end) {
    middle = (start + end) / 2;
    if (nums[middle] === target) {
    }
  }
};
search = function (nums, target) {
  start = 0;
  end = nums.length - 1;
  while (start <= end) {
    middle = Math.trunc((start + end) / 2);
    console.log(middle);
    console.log(nums[middle] === target);
    if (nums[middle] === target) {
      // searcin left and right side
      start = middle;
      end = nums.length - 1;
      binaryInRight(nums, start, end, target);
    }
    if (target > nums[middle]) {
      start = middle + 1;
    }
    if (target < nums[middle]) {
      end = middle - 1;
    }
  }
  return -1;
};

value = search(nums, target);
