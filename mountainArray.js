nums = [0, 1, 2, 4, 2, 1];
target = 3;
peak = function (nums) {
  start = 0;
  end = nums.length - 1;
  while (start <= end) {
    console.log(`start:${start},end:${end}`);
    middle = Math.trunc((start + end) / 2);

    if (nums[middle] > nums[middle + 1]) {
      return middle;
    }
    if (nums[middle] < nums[middle - 1]) {
      return middle - 1;
    }
    if (nums[middle] < nums[middle + 1]) {
      start = middle;
      console.log(`-----------`);
      console.log(`start:${start}`);
    }
    if (nums[middle] < nums[middle - 1]) {
      end = middle;
    }
  }
  return -1;
};

var findInMountainArray = function (target, nums) {
  peakValue = peak(nums);
  firstSearch(peakValue);
};

value = findInMountainArray(target, nums);

console.log(value);
