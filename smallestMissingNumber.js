nums = [0, 1, 3, 4, 5, 6, 7];
start = 0;
end = nums.length - 1;

searchRight = function (nums, start, end) {
  middleEnd = end;

  while (start <= end) {
    console.log(`start:${start},end:${end}`);
    middle = Math.trunc((start + end) / 2);
    console.log(nums[middle] - nums[middle - 1] === 1);
    if (nums[middle] - nums[middle - 1] === 1) {
      end = middle - 1;
      console.log(`----------------`);
      console.log(end);
    }

    console.log(nums[middle] - nums[middle - 1]);
    console.log(!(nums[middle] - nums[middle - 1]) === 1);
    // if (!(nums[middle] - nums[middle - 1]) === !1) {
    //   return middle;
    // }
    if (nums[end] === 0) {
      console.log(`here`);
      start = Math.trunc((0 + middleEnd) / 2);
      end = middleEnd;
      console.log(start, end);
    } else {
      return middle;
    }
  }
};

search = function (nums, start, end) {
  while (start <= end) {
    middle = Math.trunc((start + end) / 2);
    start = 0;
    end = middle;
    console.log(`start:${start},end:${end}`);
    value = searchRight(nums, start, end);
    // console.log(value);
    return value;
  }
};

value = search(nums, start, end);
console.log(`value:${value}`);
