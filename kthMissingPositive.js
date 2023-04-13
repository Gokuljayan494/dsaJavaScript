// arr = [2, 3, 4, 7, 11];
// k = 5;
// arr = [1, 2, 3, 4];
// k = 2;
// arr = [2];
// k = 1;
arr = [1, 3];
k = 1;
var findKthPositive = function (arr, k) {
  start = 0;
  end = arr.length - 1;
  if (arr.length === 1) {
    return arr[0] - k;
  }
  while (start <= end) {
    middle = Math.trunc((start + end) / 2);
    // check the missing numbers with a equation

    if (arr[middle] - (middle + 1) < k) {
      console.log(`hey`);
      start = middle + 1;
      console.log(`start:${start}`);
    }

    if (arr[middle] - (middle + 1) > k) {
      console.log(`hello`);
      end = middle - 1;
    }
  }
  if (arr[0] === 1) {
    return arr[middle] + k;
  } else {
    return middle + k;
  }
};

value = findKthPositive(arr, k);

console.log(value);
