//    *
//   * *
//  * * *
// * * * *
//  * * *
//   * *
//    *
n = 9;
middle = Math.trunc(n / 2);
console.log(`middle:${middle}`);
spaceValue = "";
pattern = "";
middleValue = middle;
spaceValue1 = 1;
middleValue1 = middle;

col = middleValue1;

for (row = 1; row <= n; row++) {
  // here we are giving space

  if (row > middle + 1) {
    spaceValue = "";
    pattern = "";
    let space1 = 1;

    for (space1; space1 <= spaceValue1; space1++) {
      pattern += " ";
    }
    spaceValue1 = spaceValue1 + 1;

    for (col = middleValue1; col > 0; col--) {
      pattern += " *";
    }

    middleValue1 = middleValue1 - 1;
    col = middleValue1;
    console.log(pattern);
  } else {
    pattern = "";
    for (space = middleValue; space >= 0; space--) {
      pattern += " ";
    }
    middleValue = middleValue - 1;
    space = middleValue;

    for (col = 1; col <= row; col++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}
