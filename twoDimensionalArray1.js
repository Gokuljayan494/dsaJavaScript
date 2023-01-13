let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
row = 0;
col = arr.length - 1;
target = 13;
while (row <= arr.length && col >= 0) {
  // console.log(arr[]);
  if (arr[row][col] === target) {
    console.log(row, col);
    break;
  }
  if (target < arr[row][col]) {
    col--;
  }
  if (target > arr[row][col]) {
    row++;
  }
}
