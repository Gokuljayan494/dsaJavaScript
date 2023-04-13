arr = [3, 1, 5, 13, 6];

swap = function (arr, j) {
  temp = arr[j];
  arr[j] = arr[j - 1];
  arr[j - 1] = temp;
  return arr;
};

for (let i = 0; i <= arr.length - 2; i++) {
  for (let j = i + 1; j >= 0; j--) {
    // swap
    if (arr[j] < arr[j - 1]) {
      arr = swap(arr, j);
    }
  }
}

console.log(arr);
