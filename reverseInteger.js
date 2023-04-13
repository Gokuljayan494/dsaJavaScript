/**
 * @param {number} x
 * @return {number}
 */

let reverseNumber = 0;
num = -32192;
checkIsPositive = function (x, reverseNumber) {
  while (x > 0) {
    lastDigit = x % 10;
    reverseNumber = reverseNumber * 10 + lastDigit;
    x = Math.trunc(x / 10);
  }
  return reverseNumber;
};
checkIsNegative = function (x, reverseNumber) {
  while (x < 0) {
    lastDigit = x % 10;
    reverseNumber = reverseNumber * 10 + lastDigit;
    x = Math.trunc(x / 10);
  }
  return reverseNumber;
};
let lastDigit;
var reverse = function (x) {
  reverseNumber = 0;
  if (x > 0) {
    return checkIsPositive(x, reverseNumber);
  } else {
    return checkIsNegative(x, reverseNumber);
  }
};

value = reverse(num);
console.log(value);
