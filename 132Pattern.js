// const num = [1, 2, 3, 4];
// const num = [3, 1, 4, 2];
// const num = [-1, 3, 2, 0];
// const num = [3, 5, 0, 3, 4];
// const num = [1, -4, 2, -1, 3, -3, -4, 0, -3, -1];
// const num = [-2];
// const num = [
//   -10, -10, -9, -10, -10, -10, -10, -9, -10, -9, -10, -9, -10, -10, -10, -9, -9,
//   -9, -10, -10, -10, -9, -10, -10, -10, -9, -9, -9, -9, -10, -10, -9, -9, -9,
//   -10, -9, -10, -10, -10, -9, -10, -10, -9, -10, -10, -9, -9, -9, -10, -9, -10,
//   -9, -10, -10, -9, -9, -10, -10, -9, -9, -9, -10, -9, -10, -10, -10, -9, -9,
//   -10, -9, -10, -10, -9, -10, -10, -10, -10, -9, -10, -10, -10, -10, -10, -9,
//   -9, -9, -10, -10, -9, -9, -9, -9, -9, -9, -10, -10, -10, -10, -9, -9, -10,
//   -10, -10, -9, -9, -10, -9, -10, -10, -9, -9, -9, -10, -10, -10, -9, -10, -10,
//   -10, -10, -9, -9, -9, -10, -10, -9, -9, -9, -10, -10, -9, -9, -10, -9, -10,
//   -10, -9, -9, -9, -10, -9, -9, -9, -10, -10, -9, -9, -10, -10, -10, -9, -10,
//   -10, -10, -10, -10, -10, -10, -10, -9, -10, -10, -9, -9, -9, -10, -10, -9, -9,
//   -9, -10, -9, -9, -10, -9, -9, -10, -10, -9, -9, -10, -10, -10, -10, -10, -10,
//   -9, -9, -9, -10, -10, -10, -9, -10, -9, -10, -10, -10, -10, -9, -9, -9, -10,
//   -9, -9, -9, -9, -9, -9, -10, -10, -9, -9, -9, -10, -9, -10, -10, -10, -9, -9,
//   -9, -9, -9, -10, -9, -10, -9, -9, -9, -9, -9, -9, -9, -10, -10, -10, -10, -9,
//   -9, -10, -10, -9, -10, -10, -9, -9, -9, -9, -10, -10, -10, -9, -9, -9, -9,
//   -10, -10, -9, -9, -10, -9, -9, -10, -9, -9, -10, -10, -10, -10, -10, -9, -10,
//   -9, -9, -9, -9, -10, -10, -10, -9, -10, -10, -10, -10, -10, -9, -9, -10, -10,
//   -10, -10, -9, -9, -9, -10, -9, -10, -10, -10, -9, -10, -9, -9, -10, -9, -9,
//   -10, -9, -10, -10, -9, -9, -10, -9, -10, -10, -10, -10, -10, -9, -9, -10, -10,
//   -10, -9, -10, -9, -10, -9, -10, -9, -9, -9, -10, -9, -10, -9, -9, -9, -10,
//   -10, -10, -10, -10, -9, -10, -9, -10, -9, -9, -10, -10, -9, -9, -9, -10, -9,
//   -10, -10, -10, -9, -10, -9, -10, -9, -10, -9, -10, -9, -10, -10, -10, -9, -10,
//   -9, -9, -10, -10, -10, -10, -9, -10, -10, -9, -10, -10, -9, -10, -10, -10,
//   -10, -9, -9, -9, -9, -10, -9, -9, -9, -9, -10, -9, -10, -10, -10, -10, -9,
//   -10, -10, -10, -9, -9, -10, -9, -10, -10, -9, -9, -10, -9, -10, -9, -10, -9,
//   -10, -9, -10, -9, -9, -9, -10, -10, -10, -10, -9, -9, -9, -10, -9, -9, -10,
//   -9, -9, -9, -9, -9, -10, -9, -9, -9, -9, -10, -10, -10, -9, -9, -9, -9, -9,
//   -10, -10, -9, -9, -10, -10, -10, -10, -10, -10, -9, -10, -10, -9, -9, -10,
//   -10, -10, -9, -10, -9, -10, -10, -9, -9, -10, -10, -9, -10, -10, -9, -10, -10,
//   -10, -9, -9, -10, -10, -10, -10, -10, -10, -10, -9, -9, -9, -10, -9, -10, -10,
//   -10, -9, -10, -10, -9, -9, -10, -9, -9, -9, -10, -10, -9, -10, -9, -9,
// ];
const num = [-2, 1, -1];
let i = 0;
count = 0;
valueCount1 = 0;
valueCount2 = 0;
const pattern = function (num) {
  let i = 0;
  let end = num.length;
  let j = i + 1;
  let k = j + 1;
  if (i === num.length - 1 || j === num.length - 1) {
    return false;
  }
  num.map((values) => {
    if (values === -10) {
      count++;
    }
    if (values === -9) {
      valueCount1++;
    }
  });
  console.log(count, valueCount1);
  if (count + valueCount1 === num.length - 1) {
    return false;
  }
  while (i < end) {
    if (!num[j]) {
      return false;
    }
    console.log(i, j, k);
    console.log(num[i], num[j], num[k]);
    if (
      (num[i] && num[j] && num[k]) ||
      num[i] === 0 ||
      num[j] === 0 ||
      num[k] === 0
    ) {
      if (num[i] < num[k] && num[k] < num[j]) {
        return true;
      } else {
        // const num = [3, 1, 4, 2]
        if (k === num.length - 1) {
          j = j + 1;
          k = j + 1;
          if (j === num.length - 1) {
            console.log(`here`);
            i = i + 1;
            j = i + 1;
            k = j + 1;
            console.log(i, j, k);
          }
          if (i === num.length - 2) {
            return false;
          }
        } else if (k < num.length - 1) {
          k++;
          if (j === num.length - 2) {
            console.log(`here`);
            i = i + 1;
            j = j + 1;
            k = j + 1;
          }
          console.log(`value of k:${k}`);
        }
      }
    }
  }
};
value = pattern(num);
console.log(value);
