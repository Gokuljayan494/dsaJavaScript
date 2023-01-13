arr = [7, 1, 2, 3, 4, 5, 6];
start = 0;

end = arr.length - 1;

peakRotated = function (arr, start, end) {
  while (start <= end) {
    middle = (start + end) / 2;
    if (arr[middle] > arr[middle + 1]) {
      return middle;
    }
    if (arr[middle] < arr[middle - 1]) {
      return middle - 1;
    }
    if (arr[start] > arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
};

value = peakRotated(arr, start, end);
console.log(arr[value]);
