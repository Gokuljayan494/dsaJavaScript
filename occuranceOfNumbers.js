nums = [1, 2, 2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
// nums = [2, 5, 5, 5, 6];

save = 0;
start = 0;
end = nums.length - 1;
target = 5;
binaryLeft = (nums, start, end, target, save) => {
  while (start <= end) {
    startValue = 0;
    console.log(`target:${target}`);
    console.log(Math.trunc((1 + 1) / 2));
    console.log(`start:${start},end:${end}`);

    middle = Math.trunc((start + end) / 2);
    console.log(`middleSearch:${middle}`);
    // middle = start + (end - start / 2);
    // middle = Math.trunc((start + end) / 2);
    console.log(`middle:${middle},numsMidle:${nums[middle]}`);
    console.log(target === nums[middle]);
    if (target === nums[middle]) {
      save = middle;
      if (startValue == 0) {
        end = middle - 1;
      }
    }
    if (target > nums[middle]) {
      start = middle + 1;
    }
    if (target < nums[middle]) {
      end = middle - 1;
    }

    // return save;
  }
  return save;
};

search = function (nums, start, end, target, save) {
  while (start <= end) {
    console.log(`start:${start},end:${end}`);
    middle = Math.trunc((start + end) / 2);
    // middle = start + (end - start / 2);

    console.log(`middle:${middle}`);
    if (target === nums[middle]) {
      start = 0;
      end = middle;
      //   break;
      //   console.log(end);
      first = binaryLeft(nums, start, end, target, save);
      console.log(`first:${first}`);

      break;
    }
    if (target > nums[middle]) {
      start = middle + 1;
    }
    if (target < nums[middle]) {
      end = middle - 1;
    }
  }
  return -1;
  i;
};

search(nums, start, end, target);
