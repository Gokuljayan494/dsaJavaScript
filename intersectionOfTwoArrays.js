/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// nums1 = [1, 2, 2, 1];
// nums2 = [2, 2];
nums1 = [
  84, 5, 30, 84, 67, 78, 73, 38, 93, 92, 15, 43, 38, 81, 68, 65, 62, 21, 16, 38,
  95, 68, 60, 35, 43, 95, 67,
];
nums2 = [
  82, 60, 70, 10, 94, 6, 44, 51, 1, 3, 97, 84, 3, 87, 91, 55, 81, 90, 45, 22,
  18, 58, 62, 96, 27, 24, 16, 63, 30, 60, 29, 93, 27, 56, 79, 4, 69, 9, 21, 23,
  7, 49, 62, 89, 22, 64, 85, 75, 55, 49, 57, 17, 84, 49, 8, 13, 94, 40, 75, 50,
  93, 46, 36, 94, 50, 0, 3, 65, 49, 82, 45, 11, 53, 63, 27, 71, 45, 37, 45, 19,
  21, 57, 66, 99, 94, 92, 44, 35, 84, 78, 80, 88,
];
// nums1 = [4, 9, 5];
// nums2 = [9, 4, 9, 8, 4];
// nums1 = [4, 7, 9, 7, 6, 7];
// nums2 = [5, 0, 0, 6, 1, 6, 2, 2, 4];

// nums1 = [4, 9, 5];
// nums2 = [9, 4, 9, 8, 4];
arr1 = [];
findMax = function (nums1, start, last) {
  max = start;

  for (let k = 0; k <= last; k++) {
    if (nums1[max] < nums1[k]) {
      max = k;
    }
  }
  return max;
};
swap = function (maxValue, last, nums1) {
  temp = nums1[last];
  nums1[last] = nums1[maxValue];
  nums1[maxValue] = temp;
  return nums1;
};

search = function (arr, target) {
  console.log(arr);
  start = 0;
  end = arr.length - 1;
  while (start <= end) {
    middle = Math.trunc((start + end) / 2);
    console.log(arr[middle]);
    if (arr[middle] === target) {
      // here dont return the value return any string
      return false;
    }
    if (arr[middle] < target) {
      start = middle + 1;
    }
    if (arr[middle] > target) {
      end = middle - 1;
    }
  }
  return -1;
};

var intersection = function (nums1, nums2) {
  arr1 = [];
  // selection sorting nums1
  for (let i = 0; i <= nums1.length - 1; i++) {
    last = nums1.length - 1 - i;
    // find the max value
    maxValue = findMax(nums1, (start = 0), last);
    swapValue = swap(maxValue, last, nums1);
  }

  console.log(swapValue);
  for (let m = 0; m <= nums2.length - 1; m++) {
    last1 = nums2.length - 1 - m;
    // find the max value
    maxValue1 = findMax(nums2, (start = 0), last1);
    console.log(maxValue1);
    swapValue1 = swap(maxValue1, last1, nums2);
    console.log(swapValue1);
  }
  console.log(`--------------------`);
  console.log(`--------------------`);
  console.log(`--------------------`);
  console.log(swapValue1);
  for (let k = 0; k <= swapValue1.length - 1; k++) {
    target = swapValue1[k];
    console.log(`target:${target}`);
    start = 0;
    end = swapValue.length - 1;
    while (start <= end) {
      console.log(`start:${start},end:${end}`);
      middle = Math.trunc((start + end) / 2);
      if (swapValue[middle] === target) {
        console.log(`hey`);

        // check if the array 1 contains the value if yes then dont insert
        if (arr1[0] === undefined) {
          console.log(`here inserted :${target}`);

          arr1.push(target);
        } else {
          // sort the arr1

          console.log(arr1);

          for (m = 0; m <= arr1.length - 1; m++) {
            console.log(`target:${target}`);
            // break;
            last = arr1.length - 1 - m;
            maxValue = findMax(arr1, (start = 0), last);
            swapValue3 = swap(maxValue, last, arr1);
          }
          console.log(`------------`);
          console.log(`arr:${swapValue3},target:${target}`);
          value = search(swapValue3, target);
          if (value === -1) {
            console.log(`hey`);
            arr1.push(target);
          }
        }

        //////////////////////
        start = nums2.length + 1;
      }
      if (swapValue[middle] < target) {
        start = middle + 1;
      }
      if (swapValue[middle] > target) {
        end = middle - 1;
      }
    }
  }
  return arr1;
};

value = intersection(nums1, nums2);
console.log(`---`);
console.log(value);
