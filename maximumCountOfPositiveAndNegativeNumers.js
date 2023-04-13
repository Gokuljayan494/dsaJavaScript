// arr = [-3, -2, -1, 0, 1, 2, 3];
// nums = [5, 20, 66, 1314];
// nums = [-3, -2, -1, 0, 0, 1, 2];
// nums = [-2, -1, -1, 1, 2, 3];
// nums = [-1563, -236, -114, -55, 427, 447, 687, 752, 1021, 1636];
// nums = [-1563, -236, -114, -55, 427, 447, 687, 752, 1021, 1636];
// nums = [-1563, -236, -114, -55, 427, 447, 687, 752, 1021, 1636];
// nums = [-3, -2, -1, 0, 0, 1, 2];
// nums = [-2, -1, -1, 1, 2, 3];
nums = [5, 20, 66, 1314];
/**
 * @param {number[]} nums
 * @return {number}
 *
 */
let subValue = 0;
negativeInteger = function (arr) {
  let value;
  start = 0;
  end = arr.length - 1;
  while (start <= end) {
    middle = Math.trunc((start + end) / 2);

    // break;
    // if (arr[start] || arr[end] === 0) {
    //   subValue = subValue + 1;
    //   console.log(subValue);
    // }
    if (arr[middle] === 0) {
      end = middle - 1;
    }
    if (arr[middle] > 0) {
      end = middle - 1;
    }
    if (arr[middle] < 0) {
      //   break;
      start = middle + 1;
      value = middle;
    }
  }
  if (value) {
    return value + 1;
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

    // break;
    // break;
    if (arr[start] === 0 || arr[end] === 0) {
      subValue = subValue + 1;
    }
    if (arr[middle] === 0) {
      start = middle + 1;
      subValue = subValue + 1;
    }
    if (arr[middle] > 0) {
      end = middle - 1;
      value = middle;
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

  totalNegativeIntegers = valueNegativeIntegers;

  console.log(`totalNegativeIntegers:${totalNegativeIntegers}`);

  valuePositiveIntegers = positiveIntegers(nums);

  if (valuePositiveIntegers === -1) valuePositiveIntegers = 0;

  console.log(`valuePositiveIntegers:${valuePositiveIntegers}`);
  console.log(`nums:${nums.length}`);

  console.log(`cal:${nums.length - valuePositiveIntegers - subValue}`);
  totalPostiveIntegers = nums.length - valuePositiveIntegers - subValue;
  console.log(`value: ${nums.length - 1 - valuePositiveIntegers}`);

  console.log(`totalPositibeIntegers:${totalPostiveIntegers}`);
  if (totalNegativeIntegers === totalPostiveIntegers) {
    return totalNegativeIntegers;
  }
  if (totalNegativeIntegers > totalPostiveIntegers) {
    return totalNegativeIntegers;
  }

  if (totalPostiveIntegers > totalNegativeIntegers) {
    console.log(totalPostiveIntegers);
    return totalPostiveIntegers;
  } else {
    return -1;
  }
};
value = maximumCount(nums);
console.log(value);
