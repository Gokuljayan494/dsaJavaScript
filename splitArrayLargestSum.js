nums = [7, 2, 5, 10, 8];

m = 2;

totalSum = 0;
sum = 0;
res = 0;
arr1 = [];

divisionSubArray = function (target, nums, m) {
  count = 1;
  for (k = 0; k < nums.length; k++) {
    sum += nums[k];
    if (sum >= target) {
      count++;
      sum = 0;
      k = k - 1;
    }
  }
  return count;
};

rangebaseSearch = function (maximum, totalSum, nums, m) {
  start = maximum;
  end = totalSum;
  while (start < end) {
    console.log(`start:${start},end:${end}`);
    middle = Math.trunc((start + end) / 2);
    console.log(`middle:${middle}`);
    // check if the middle

    countValue = divisionSubArray(middle, nums, m);
    console.log(countValue);

    if (countValue < m) {
      start = middle + 1;
    }
    if (countValue > m) {
      end = middle - 1;
    }
    if (countValue === m) {
      console.log(`-------`);
      start = middle;
      arr1.push(middle);
      console.log(`end:${end}`);
    }
  }
  return arr1;
};

splitArray = function (nums, m) {
  // find the largets one from the array
  for (i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      maximum = nums[i];
    }
  }

  //   find the total sum of array
  for (k = 0; k < nums.length; k++) {
    totalSum += nums[k];
  }

  console.log(`totalSum:${totalSum},maximumInNumsArray:${maximum}`);

  //   range based binarySearch

  return rangebaseSearch(maximum, totalSum, nums, m);
};

value = splitArray(nums, m);
console.log(value);
