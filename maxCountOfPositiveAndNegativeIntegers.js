// nums = [-6, -5, -4, -3, -2, -1, 1, 2, 3];
nums = [-1, 1];
// nums = [-2, -1, -1, 1, 2, 3];
// nums = [-3, -2, -1, 1, 2];

first = function (start, end, nums) {
  while (start <= end) {
    // middle = Math.trunc((start + end) / 2);
    console.log(`start:${start},end:${end}`);
    middle = Math.trunc((start + end) / 2);

    console.log(`middle:${middle}`);
    if (start - end === 0 && nums[middle] > 0) {
      console.log(`here`);
      console.log(middle);

      start = 0;
      end = middle - 1;
    }

    if (nums[middle] < 0) {
      console.log(`hey `);
      start = middle + 1;
      console.log(start);
    }

    if (nums[middle] > 0) {
      end = middle;
      console.log(`----------`);
      console.log(start, end);
    }

    if (start - end === 0 && nums[middle] < 0) {
      return middle;
    }
  }
};
search = function (nums) {
  start = 0;
  end = nums.length - 1;

  value = first(start, end, nums);
  console.log(value);
};

search(nums);
