/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  start = 1;
  end = n;
  if (n === 1) {
    return n;
  }
  while (start <= end) {
    middle = Math.trunc((start + end) / 2);

    console.log(middle);
    coinsFilled = (middle * (middle + 1)) / 2;
    console.log(coinsFilled);

    if (coinsFilled < n) {
      console.log(`hello`);
      start = middle + 1;
    }
    if (coinsFilled >= n) {
      console.log(`hey`);
      end = middle - 1;
    }
  }
  return start - 1;
};

value = arrangeCoins(3);
console.log(value);
