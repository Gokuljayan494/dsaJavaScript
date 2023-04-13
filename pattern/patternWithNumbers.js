// 1
// 12
// 123
// 1234
// 12345
n = 5;
pattern = "";
for (row = 1; row <= n; row++) {
  pattern = "";
  for (col = 1; col <= row; col++) {
    pattern += `${col}`;
  }
  console.log(pattern);
}
