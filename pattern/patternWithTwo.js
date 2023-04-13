// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
n = 9;
pattern = "";
checkMiddle = Math.trunc(n / 2) + 1;
value = checkMiddle - 1;

for (row = 1; row <= n; row++) {
  // here find the middle of the pattern

  pattern = "";
  if (row > checkMiddle) {
    for (col = value; col > 0; col--) {
      pattern += "*";
    }
    value = value - 1;
    console.log(pattern);
  } else {
    for (col = 1; col <= row; col++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
