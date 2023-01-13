nums = [1, 2, 2, 3, 4, 4];
start = 0;
end = nums.length - 1;
searchRight = (start, end, nums) => {
  middleElement = end;
  while (start <= end) {
    console.log(`start:${start},end:${end}`);

    count = 0;
    middle = Math.trunc((start + end) / 2);
    console.log(!nums[middle - 1] === !nums[middle]);
    // break;
    if (nums[middle - 1] === nums[middle]) {
      count++;
      end = middle - 1;
    }
    if (!nums[middle - 1] === !nums[middle]) {
      end = middle - 1;
      console.log(nums[middle - 1]);
    }
    if (middle === end) {
      start = (0 + middleElement) / 2 + 1;
      end = middleElement;
      console.log(`here`);
      console.log(start, end);
    }
  }
};

let search = (nums, start, end) => {
  while (start <= end) {
    middle = Math.trunc((start + end) / 2);
    start = 0;
    end = middle;
    console.log(`start:${start},end:${end}`);
    return searchRight(start, end, nums);
  }
};

search(nums, start, end);
