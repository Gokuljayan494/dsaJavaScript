// nums = [1, 2, 5, 2, 3];
// target = 2;
// nums = [1, 2, 5, 2, 3];
// target = 3;

// nums = [1, 2, 5, 2, 3];
// target = 4;
// nums = [100, 1, 100];
// target = 100;
// nums = [1];

// target = 1;
// nums = [
//   48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62, 77,
//   15, 38,
// ];
// target = 6;
// nums = [
//   25, 72, 50, 2, 98, 52, 49, 23, 39, 65, 85, 22, 58, 25, 52, 84, 66, 83, 52, 50,
//   35, 95, 21, 48, 89, 88, 48, 58, 69, 100,
// ];
// target = 58;
// nums = [2, 1];
// target = 1;

// nums = [
//   75, 99, 19, 93, 87, 68, 12, 18, 48, 83, 24, 50, 16, 53, 36, 16, 80, 68, 46,
//   13, 53, 100, 50, 49, 77, 52, 34, 42, 38, 98, 73, 11, 13, 61, 72, 8, 11, 67,
//   98, 24, 23, 71, 47, 6, 5, 7, 97, 86, 25, 82, 11, 15, 26, 97, 69, 6, 30, 77,
//   98, 44, 32, 39, 71, 47, 64, 78, 6, 61, 72, 75,
// ];
// target = 98;

// nums = [
//   18, 33, 62, 92, 24, 42, 28, 95, 91, 24, 6, 84, 8, 4, 68, 28, 38, 27, 59, 29,
//   69, 19, 51, 13, 22, 83, 41, 74, 59, 89, 63, 18, 90, 78, 78, 22, 1, 25, 67, 88,
//   84, 88, 18, 45, 63, 62, 82, 48, 20, 57, 46, 59, 69, 62, 28, 94, 92, 93, 95,
//   20, 97, 21, 3, 36, 56, 15, 68, 84, 94, 91, 78, 42, 11, 73, 73, 57, 90, 75, 56,
//   37, 48, 9, 5, 43, 8, 25, 29, 11, 88, 49, 55, 87, 61, 24, 74, 7, 96, 18, 100,
//   70,
// ];
// target = 59;
nums = [2, 1];
target = 1;
arr1 = [];
let middle = 0;
let start, end, middle1, saveValue;
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

binarySearchInLeft = function (start, end, nums, target) {
  while (start <= end) {
    middle = Math.trunc((start + end) / 2);
    if (target === nums[middle]) {
      //   return middle;
      saveValue = middle;
      end = middle - 1;
    }
    if (nums[middle] < target) {
      start = middle + 1;
    }
  }
  if (saveValue || middle === 0) {
    return saveValue;
  }
  return -1;
};

binarySearchInRight = function (start, end, nums, target) {
  while (start <= end) {
    console.log(`start:${start},end:${end}`);
    middle = Math.trunc((start + end) / 2);
    console.log(target === nums[middle]);
    if (target === nums[middle]) {
      //   return middle;
      // save value in another variable because in the right also it may have target value
      saveValue = middle;
      start = middle + 1;
    }
    if (nums[middle] > target) {
      end = middle - 1;
    }
  }
  if (saveValue) {
    console.log(`------`);
    console.log(`here`);
    console.log(saveValue);
    return saveValue;
  }
  return -1;
};

swap = function (maximumvalue, last, arr) {
  temp = arr[maximumvalue];
  arr[maximumvalue] = arr[last];
  arr[last] = temp;
  return arr;
};

maxValue = function (arr, last, start) {
  max = start;
  for (let j = start; j <= last; j++) {
    if (arr[max] < arr[j]) {
      max = j;
    }
  }
  return max;
};

var targetIndices = function (nums, target) {
  // selection sorting
  //   find the largest number from the array and sort
  //   arr1 = [];
  console.log(nums.length - 1 === 0 && nums[0] === target);
  if (nums.length - 1 === 0 && nums[0] === target) {
    return (nums[0] = 0);
  }
  for (let i = 0; i <= nums.length - 1; i++) {
    last = nums.length - 1 - i;

    maximumvalue = maxValue(nums, last, (start = 0));
    // swap value

    swapValue = swap(maximumvalue, last, nums);
    // console.log(swapValue);
  }
  console.log(swapValue);
  //   binarySearch here
  start = 0;
  //   let middle = 0;
  let end = nums.length - 1;
  while (start <= end) {
    middle = Math.trunc((start + end) / 2);

    if (target === nums[middle]) {
      // search left first

      middle1 = middle;
      valueMiddle = middle;
      leftValue = binarySearchInLeft((start = 0), (end = middle), nums, target);
      console.log(`leftValueLe:${leftValue}`);
      console.log(nums[leftValue - 1]);
      console.log(valueMiddle - leftValue === 0);
      if (valueMiddle - leftValue === 0) {
        arr1.push(valueMiddle);
      }

      console.log(`arr1:${arr1}`);
      if (valueMiddle - leftValue >= 1) {
        // arr1.push();

        for (i = leftValue; i <= valueMiddle; i++) {
          // insert value to the array

          arr1.push(i);
        }
      }

      leftValue = binarySearchInRight(
        (start = middle1 + 1),
        (end = nums.length - 1),
        nums,
        target
      );
      console.log(`leftValue:${leftValue}`);
      console.log(leftValue === -1);
      if (leftValue === -1) {
        console.log(`here`);
        return arr1;
      }
      console.log(`------`);
      console.log(`------`);
      console.log(`------`);
      console.log(leftValue - valueMiddle);
      if (valueMiddle - leftValue === 0) {
        arr1.push(valueMiddle);
      }
      console.log(leftValue - valueMiddle >= 1);

      if (leftValue - valueMiddle >= 1) {
        console.log(`leftValue:${leftValue}`);
        console.log(`valueMiddle:${valueMiddle}`);
        console.log(`here`);
        // arr1.push();

        for (i = leftValue; i >= valueMiddle; i--) {
          // insert value to the array
          console.log(`value:${i}`);
          arr1.push(i);
        }
      }
      for (let i = 0; i <= arr1.length - 1; i++) {
        last = arr1.length - 1 - i;

        maximumvalue = maxValue(arr1, last, (start = 0));
        // swap value

        swapValue = swap(maximumvalue, last, arr1);
        // console.log(swapValue);
      }
      return swapValue;
    }
    if (nums[middle] < target) {
      start = middle + 1;
    }
    if (nums[middle] > target) {
      end = middle - 1;
    }
  }
  return [];
};

value = targetIndices(nums, target);

console.log(value);
