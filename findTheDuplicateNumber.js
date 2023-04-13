/**
 * @param {number[]} nums
 * @return {number}
 */

nums = [1, 2, 4, 6, 7, 4, 3, 5];
var findDuplicate = function (nums) {
  // sort the array
  let i = 0;
  while (i < nums.length) {
    correct = nums[i] - 1;
    if (nums[i] != nums[correct]) {
      temp = nums[i];
      nums[i] = nums[correct];
      nums[correct] = temp;
    } else {
      return nums[i];
    }
  }
  //   search the value in array
  let j = 0;
  console.log(nums);
  //   while (j < nums.length) {
  //     if (nums[j] != nums[j + 1]) {
  //       j++;
  //     } else {
  //       return arr[j];
  //     }
  //   }

  return nums[nums.length - 1];
  //   for (j; j < nums.length; j++) {
  //     target = nums[j];
  //     for (k = j + 1; k < nums.length; k++) {
  //       if (nums[k] === target) {
  //         return nums[k];
  //       }
  //     }
  //   }
};

value = findDuplicate(nums);
console.log(value);
