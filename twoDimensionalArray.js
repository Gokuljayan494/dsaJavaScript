let matrix = [
  [10, 20, 30, 40],
  [100, 110, 120, 130],
  [210, 220, 230, 240],
  [310, 320, 330, 340],
];

// console.log(arr.length - 1);
row = 0;
target = 20;
col = matrix.length - 1;
while (row < col && col >= 0) {
  if (matrix[row][col] === target) {
    console.log(`here row:[${row}] col:[${col}]`);
    break;
  }
  if (target > matrix[row][col]) {
    row++;
  }
  if (target < matrix[row][col]) {
    col--;
  }
}
