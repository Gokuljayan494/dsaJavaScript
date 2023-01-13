// nums = [6, 7, 5, 3, 2, 1];
nums = [1, 2, 3, 4, 5];

for (i = 0; i < nums.length - 1; i++) {
  // j=1 check the j with j-1 and

  // condition for j <nums.length-i-1

  // this because after every pass the highest value in the

  // array will get sorted
  swap = false;
  for (j = 1; j < nums.length - i; j++) {
    if (nums[j] < nums[j - 1]) {
      // swap
      let temp = nums[j];
      nums[j] = nums[j - 1];
      nums[j - 1] = temp;
      swap = true;
    }
  }
  if (!swap) {
    console.log(`here`);
    break;
    console.log(nums);
  }
}

console.log(nums);
