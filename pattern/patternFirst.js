pattern = "";

for (row = 1; row <= 5; row++) {
  pattern = "";
  for (col = 1; col <= row; col++) {
    // console.log(`* `);
    pattern += "*";
  }
  console.log(pattern);
}
