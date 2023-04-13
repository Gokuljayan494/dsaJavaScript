arr = [7, 3, 1, 22, 34, 4, 677, 6, 2];
for (row = 0; row <= arr.length - 1; row++) {
  for (j = 1; j <= arr.length - 1; j++) {
    if (arr[j] < arr[j - 1]) {
      // swap

      temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
  }
}

console.log(arr);
