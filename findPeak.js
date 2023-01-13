// let middle = 0;
nums = [1, 2, 3, 1];
var findPeakElement = function (nums) {
  start = 0;
  end = nums.length - 1;
  while (start < end) {
    let middle = Math.trunc((start + end) / 2);
    console.log(middle);
    // break;
    if (nums[middle] > nums[middle + 1]) {
      start = middle + 1;
      break;
      return asc(nums, start, end);
    }
    if (nums[middle] < nums[middle - 1]) {
      end = middle - 1;
      console.log(`hello`);
      console.log(end);
      break;
      return dsc(nums, start, end);
    }
  }
};
let asc = function (nums, start, end) {
  while (start <= end) {
    middle = (start + end) / 2;
    if (nums[middle] > nums[middle + 1]) {
      return middle;
    } else {
      console.log(`here`);
      start = middle + 1;
    }
  }
};
let dsc = function (nums, start, end) {
  while (start <= end) {
    middle = (start + end) / 2;
    if (nums[middle] > nums[middle + 1]) {
      return middle;
    } else {
      console.log(`here`);
      console.log(`here`);

      start = middle + 1;
    }
  }
};
value = findPeakElement(nums);
console.log(value);
