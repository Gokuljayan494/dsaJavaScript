// *****
// ****
// ***
// **
// *

n = 5;
value = n;

pattern = "";
for (row = 1; row <= n; row++) {
  pattern = "";

  for (col = value; col > 0; col--) {
    pattern += "*";
  }
  console.log(pattern);
  value = value - 1;
}
