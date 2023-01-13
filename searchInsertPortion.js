// nums = [1, 3, 5, 6];
nums = [1, 3, 5, 6];
// nums = [1, 3];
target = 7;
search = function (nums, target) {
  start = 0;

  end = nums.length - 1;
  while (start <= end) {
    console.log(`start:${start},end:${end}`);
    middle = Math.trunc((start + end) / 2);
    if (target > nums[middle]) {
      start = middle + 1;
    }
    if (target < nums[middle]) {
      end = middle - 1;
    }
    if (target === nums[middle]) {
      return middle;
    }
  }
  console.log(`middle:${middle}`);
  console.log(`target:${target}`);
  if (target < nums[middle]) {
    return middle - 1;
  }
  if (target > nums[middle]) {
    return middle + 1;
  }
  if (target === 0 && nums[0] === 1) {
    return +1;
  }
};

value = search(nums, target);
console.log(value);
