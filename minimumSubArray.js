/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// nums = [2, 3, 1, 2, 4, 3];
// target = 7;
// nums = [1, 4, 4];
// target = 4;

// nums = [1, 1, 1, 1, 1, 1, 1, 1];
// target = 11;

nums = [1, 2, 3, 4, 5];
target = 8;
value = 0;
arr1 = [];
end2 = nums.length - 1;
total = 0;
res = Infinity;

var minSubArrayLen = function (target, nums) {
  for (start1 = 0; start1 <= nums.length - 1; start1++) {
    if (nums[0] === nums[nums.length - 1]) {
      return 0;
    }
    if (nums[start1] >= target) {
      arr1.push(1);
      return arr1;
    }
    if (start1 > 0) {
      total = total - nums[start1 - 1];
    }
    if (start1 === 0) {
      total = total + nums[start1];
    }
    // the value is for saving the index which its getting target

    start2 = value;
    while (start2 <= end2) {
      console.log(`start:${start2},end:${end2}`);

      console.log(`start:${nums[start2]},end:${end2}`);
      if (total >= target) {
        values1 = start2 - start1;
        res = Math.min(res, values1 + 1);
        value = start2;
        start2 = nums.length;
      }
      if (total < target) {
        start2++;

        total = total + nums[start2];
      }

      if (start1 === end2) {
        return res === Infinity ? 0 : res;
      }
    }
  }

  if (arr1[0] === undefined) {
    return 0;
  }
  // return arr1;
  // swap and return the minimum
  // return arr1;
};

value = minSubArrayLen(target, nums);

console.log(value);
