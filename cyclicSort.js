arr = [1, 5, 2, 7, 3, 6, 4];

swap = function (arr, correct, i) {
  temp = arr[i];
  arr[i] = arr[correct];
  arr[correct] = temp;

  return arr;
};
let i = 0;
while (i < arr.length) {
  // find the correct index the value must be occupied
  console.log(arr[i]);
  correct = arr[i] - 1;

  console.log(i === correct);
  if (arr[i] === arr[correct]) {
    // swap

    i++;
  } else {
    temp = arr[i];
    arr[i] = arr[correct];
    arr[correct] = temp;
  }
}

console.log(arr);
