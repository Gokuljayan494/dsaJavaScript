// nums = [8, 1, 2, 3, 4, 5, 6, 7];
// nums = [4, 5, 6, 7, 0, 1, 2];
// nums = [1];
// nums = [1, 3];
// nums = [3, 1];
// nums = [5, 1, 3];
// nums = [7, 8, 1, 2, 3, 4, 5, 6];
nums = [1, 2, 3, 4, 5, 6];
start = 0;
end = nums.length - 1;
target = 4;
middle = 0;
searchOrderAgnousticSearch = function (start, end, target, nums, middle) {
  while (start <= end) {
    console.log(`start :${start},end :${end}`);
    console.log(`---------------`);
    console.log(`---------------`);
    console.log(`---------------`);
    middle = Math.trunc((start + end) / 2);

    if (target > nums[middle]) {
      start = middle + 1;
    }
    if (target < nums[middle]) {
      end = middle - 1;
    }

    if (target === nums[middle]) {
      console.log(`--------`);
      // console.log(middle);
      return middle;
    }
  }
  return -1;
};
searchOrderAgnousticSearchRight = function (start, end, target, nums) {
  console.log(start);
  start = start + 1;
  while (start <= end) {
    console.log(`-----------`);
    console.log(`start :${start},end :${end}`);
    console.log(start, end);
    console.log(target);
    middle = Math.trunc((start + end) / 2);

    if (target > nums[middle]) {
      console.log(`here`);
      start = middle + 1;
      console.log(start);
      console.log(end);
    }
    if (target < nums[middle]) {
      end = middle - 1;
    }
    // console.log(`here 1`);
    // console.log(target);
    if (target === nums[middle]) {
      // console.log(`middle:${middle}`);
      return middle;
    }
  }
  return -1;
};
searchOrderAgnousticSearchRight1 = function (start, end, target, nums) {
  console.log(start);
  // start = start + 1;
  while (start <= end) {
    console.log(`-----------`);
    console.log(`start :${start},end :${end}`);
    console.log(start, end);
    console.log(target);
    middle = Math.trunc((start + end) / 2);

    if (target > nums[middle]) {
      console.log(`here`);
      start = middle + 1;
      console.log(start);
      console.log(end);
    }
    if (target < nums[middle]) {
      end = middle - 1;
    }
    // console.log(`here 1`);
    // console.log(target);
    if (target === nums[middle]) {
      // console.log(`middle:${middle}`);
      return middle;
    }
  }
  return -1;
};

// nums = [7, 8, 1, 2, 3, 4, 5, 6];

search = function (nums, start, end, target) {
  while (start <= end) {
    if (nums[start] < nums[end]) {
      console.log(`here`);
      middle = 0;
      binarySearch = searchOrderAgnousticSearch(
        start,
        end,
        target,
        nums,
        middle
      );
      if (binarySearch === -1) {
        return -1;
      } else {
        return binarySearch;
      }
    }
    console.log(`start:${start},end:${end}`);
    middle = Math.trunc((start + end) / 2);
    console.log(`middle${middle}`);

    if (nums[middle] < nums[middle - 1]) {
      console.log(`---------`);
      console.log(`here`);
      start = 0;
      end = middle;
      console.log(`here `);
      searchInLeft = searchOrderAgnousticSearch(start, end, target, nums);
      if (searchInLeft === -1) {
        start = middle;
        end = nums.length - 1;

        searchInright = searchOrderAgnousticSearchRight1(
          start,
          end,
          target,
          nums
        );
        if (nums[middle] > nums[middle - 1]) {
          console.log(`hey`);
          start = 0;
          end = middle;
          searchInLeft = searchOrderAgnousticSearch(start, end, target, nums);
          if (searchInLeft === -1) {
            console.log(`-----`);
            console.log(`-----`);
            console.log(`-----`);
            start = middle + 1;

            console.log(`start:${start}`);
            end = nums.length - 1;
            console.log(`end:end`);
            searchInright = searchOrderAgnousticSearchRight(
              start,
              end,
              target,
              nums
            );

            if (searchInright === -1) {
              return -1;
            } else {
              return searchInright;
            }
          } else {
            return searchInLeft;
          }
        }
        if (nums[middle] > nums[middle + 1]) {
          start = 0;
          end = middle;
          console.log(`here `);
          searchInLeft = searchOrderAgnousticSearch(start, end, target, nums);
          if (searchInLeft === -1) {
            start = middle;
            end = nums.length - 1;

            searchInright = searchOrderAgnousticSearchRight(
              start,
              end,
              target,
              nums
            );

            if (searchInright === -1) {
              return -1;
            } else {
              return searchInright;
            }
          } else {
            return searchInLeft;
          }
        }

        if (searchInright === -1) {
          return -1;
        } else {
          return searchInright;
        }
      } else {
        return searchInLeft;
      }
      // return middle - 1;
    }
    if (nums[middle] > nums[middle + 1]) {
      start = 0;
      end = middle;
      console.log(`target:${target}`);
      searchInLeft = searchOrderAgnousticSearch(start, end, target, nums);
      if (searchInLeft === -1) {
        console.log(`--------`);
        console.log(`--------`);
        console.log(`--------`);
        console.log(`--------`);
        console.log(`--------`);

        start = middle;
        console.log(start);
        end = nums.length - 1;
        console.log(end);

        searchInright = searchOrderAgnousticSearchRight(
          start,
          end,
          target,
          nums
        );

        console.log(searchInright);
        if (searchInright === -1) {
          return -1;
        } else {
          return searchInright;
        }
      } else {
        return searchInLeft;
      }
    }
    console.log(nums[start] > nums[middle]);
    if (nums[start] > nums[middle]) {
      console.log(`here`);
      end = middle - 1;
      console.log(end);
      console.log(`-----`);
      console.log(`-----`);
      console.log(`-----`);
    } else {
      start = middle + 1;
    }
  }
  if (nums[0] === target) {
    console.log(`here`);
    return nums[0];
  }
  if (nums.length === 1 && nums[0] === target) {
    return 0;
  } else {
    return -1;
  }
};
value = search(nums, start, end, target);
console.log(`value:${value}`);
