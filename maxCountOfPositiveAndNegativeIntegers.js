// nums = [-6, -5, -4, -3, -2, -1, 1, 2, 3];
// nums = [-1, 1];
nums = [-1563, -236, -114, -55, 427, 447, 687, 752, 1021, 1636];
// nums = [-2, -1, -1, 1, 2, 3];
// nums = [-3, -2, -1, 1, 2];

/**
 * @param {number[]} nums
 * @return {number}
 */
negativeInteger = function (arr) {
  let value;
  start = 0;
  end = arr.length - 1;
  while (start <= end) {
    middle = Math.trunc((start + end) / 2);

    console.log(`start:${start},end:${end}`);
    // break;
    console.log(`middle:${middle}`);
    // break;
    if (arr[middle] === 0) {
      end = middle - 1;
    }
    if (arr[middle] > 0) {
      end = middle - 1;
      console.log(end);
    }
    if (arr[middle] < 0) {
      //   break;
      start = middle + 1;
      value = middle;
    }
  }
  if (value) {
    return value;
  } else {
    return -1;
  }
};
positiveIntegers = function (arr) {
  let value;
  start = 0;
  end = arr.length - 1;
  while (start <= end) {
    middle = Math.trunc((start + end) / 2);

    console.log(`start:${start},end:${end}`);
    // break;
    console.log(`middle:${middle}`);
    // break;
    if (arr[middle] === 0) {
      start = middle + 1;
    }
    if (arr[middle] > 0) {
      end = middle - 1;
      value = middle;

      console.log(end);
    }
    if (arr[middle] < 0) {
      //   break;
      start = middle + 1;
    }
  }
  if (value) {
    return value;
  } else {
    return -1;
  }
};

var maximumCount = function (nums) {
  start = 0;
  end = nums.length - 1;
  if (nums[start] > 0 && nums[end] > 0) {
    return nums.length;
  }
  valueNegativeIntegers = negativeInteger(nums);
  console.log(`valueNegativeIntegers:${valueNegativeIntegers}`);

  if (valueNegativeIntegers == -1) valueNegativeIntegers = 0;

  totalNegativeIntegers = valueNegativeIntegers + 1;
  console.log(`totalNegativeIntegers:${totalNegativeIntegers}`);
  valuePositiveIntegers = positiveIntegers(nums);
  console.log(`positiveInteger:${positiveIntegers}`);

  if (valuePositiveIntegers === -1) valuePositiveIntegers = 0;
  totalPostiveIntegers = valuePositiveIntegers + 2;
  if (totalNegativeIntegers > totalPostiveIntegers) {
    return totalNegativeIntegers;
  }
  if (totalPostiveIntegers > totalNegativeIntegers) {
    return totalNegativeIntegers;
  } else {
    return -1;
  }
};
