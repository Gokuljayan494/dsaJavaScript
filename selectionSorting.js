// arr = [45, 21, 4, 2, 12, 25, 1];
arr = [1, 2, 5, 2, 3];
arr1 = [];
loop = 0;
findMax = function (start, arr, last) {
  console.log(`loop:${loop++}`);
  max = start;

  for (j = start; j <= last; j++) {
    if (arr[max] < arr[j]) {
      max = j;
      console.log(`max:${arr[max]}`);
    }
  }

  return max;
};
swap = function (valueMax, last, arr) {
  temp = arr[valueMax];
  arr[valueMax] = arr[last];
  arr[last] = temp;
  return arr;
};
sort = function (arr) {
  for (i = 0; i <= arr.length - 1; i++) {
    last = arr.length - 1 - i;
    valueMax = findMax((start = 0), arr, last);
    valueArr = swap(valueMax, last, arr);
  }
  return arr;
};

value = sort(arr);

console.log(value);
