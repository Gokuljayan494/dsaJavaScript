// nums1 = [1, 2, 3];
// nums2 = [2, 4];
nums1 = [3, 5];
nums2 = [2];

var getCommon = function (nums1, nums2) {
  console.log(nums1.length);
  // middleValue = Math.trunc((0 + nums1.length - 1) / 2);
  start = 0;
  end = nums1.length - 1;

  while (start <= end) {
    console.log(start);
    start1 = 0;

    end1 = nums2.length - 1;
    while (start1 <= end1) {
      console.log(`start1:${start1},end1:${end1}`);
      middle1 = Math.trunc((start1 + end1) / 2);
      // check that if first array middle equals to second array middle
      if (nums1[start] === nums2[middle1]) {
        return nums1[start];
      }

      if (nums1[start] > nums2[middle1]) {
        start1 = middle1 + 1;
      }
      console.log(nums1[start] < nums2[middle1]);
      if (nums1[start] < nums2[middle1]) {
        console.log(`end1:${end1}`);

        end1 = middle1 - 1;
        console.log(start1);

        console.log(`end1:${end1}`);
      }
    }
    if (nums1[end] < nums2[start1]) {
      return -1;
    }
    start++;
  }
  return -1;
};

value = getCommon(nums1, nums2);

console.log(value);
