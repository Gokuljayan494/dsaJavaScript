/**
 * @param {number[]} nums
 * @return {number[]}
 */

// nums = [4, 3, 2, 7, 8, 2, 3, 1];
nums = [1, 1];
arrNew = [];
var findDisappearedNumbers = function (nums) {
  // cyclic Sort
  let i = 0;

  while (i < nums.length) {
    // if array is 0-n then check the index
    //  if array is 1-n then check the index - 1

    correct = nums[i] - 1;
    if (nums[i] != nums[correct]) {
      // swap
      temp = nums[i];
      nums[i] = nums[correct];
      nums[correct] = temp;
    } else {
      i++;
    }
  }

  //   after getting sorted array search for the dissapeared values from the array

  for (i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      arrNew.push(i + 1);
    }
  }
  return arrNew;
};

value = findDisappearedNumbers(nums);

console.log(value);
