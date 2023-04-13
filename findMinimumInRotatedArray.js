nums = [6, 7, 8, 0, 1, 2, 3, 4, 5];

search = function (nums) {
  start = 0;
  end = nums.length - 1;
  while (start <= end) {
    middle = Math.trunc((start + end) / 2);
    if (nums[middle] > nums[middle + 1]) {
      return middle + 1;
    }
    if (nums[middle] < nums[middle - 1]) {
      return middle;
    }
    if (nums[start] > nums[middle]) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }
};

value = search(nums);
console.log(value);
