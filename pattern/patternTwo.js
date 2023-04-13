// *****
// *****
// *****
// *****
// *****

// pattern = "";

// n = 5;
// for (row = 1; row <= n; row++) {
//   pattern = "";
//   for (col = 1; col <= n; col++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }

// *****
// *   *
// *   *
// *   *
// *****

n = 5;
pattern = "";
pattern1 = "";
space = "";
for (row = 1; row <= n; row++) {
  if (row === 1 || row === n) {
    // here we need to print n times *
    pattern = "";
    for (colOneAndTwo = 1; colOneAndTwo <= n; colOneAndTwo++) {
      pattern += "* ";
    }
    console.log(pattern);
  } else {
    // print start only for start and end

    for (secondCol = 1; secondCol <= n; secondCol++) {
      pattern = "";
      if (secondCol === 1 || secondCol === n) {
        pattern += "* ";
      } else {
        pattern += " ";
        // console.log(space);
      }
      console.log(pattern);
    }
  }
}
// The issue with the first code was in the else block of the inner for loop:

// else {
//   space = " ";
//   console.log(space);
// }
// This block was printing a single space character instead of adding a space character to the pattern variable. To fix this, you can replace this block with:

// else {
//   pattern += " ";
// }
// This will add a space character to the pattern variable in each column except for the first and last columns of the second to fourth rows,
//  where it will add an asterisk character. With this change, the corrected code will generate the desired pattern:

// *****
// *   *
// *   *
// *   *
// *****
