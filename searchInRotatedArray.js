arr = [4, 5, 6, 7, 0, 1, 2];
// arr = [1];
start = 0;
end = arr.length - 1;
target = 4;

searchinLeftofPivot = function (arr, start, end, target) {
  console.log(`hey`);
  while (start <= end) {
    middle = Math.trunc((start + end) / 2);
    console.log(`middle:${middle}`);
    if (target > arr[middle]) {
      start = middle + 1;
    }
    console.log(`target:${target},middle:${arr[middle]}`);
    console.log(target < arr[middle]);
    if (target < arr[middle]) {
      end = middle - 1;
      console.log(`here`);
    }
    if (target === arr[middle]) {
      return middle;
    }
    break;
  }
  return -1;
};
searchinRightofPivot = function (arr, start, end, target) {
  while (start <= end) {
    middle = Math.trunc((start + end) / 2);
    if (target > arr[middle]) {
      start = middle + 1;
    }
    if (target < arr[middle]) {
      end = middle - 1;
    }
    if (target === arr[middle]) {
      return middle;
    }
  }
  return -1;
};
search = function (arr, start, end) {
  while (start <= end) {
    middle = (start + end) / 2;
    if (arr[middle] > arr[middle + 1]) {
      start = 0;
      end = middle;
      leftSearch = searchinLeftofPivot(arr, start, end, target);
      if (leftSearch === -1) {
        start = middle + 1;
        end = arr.length - 1;
        rightSearch = searchinRightofPivot(arr, start, end, target);
        console.log(`here`);
        console.log(rightSearch);
        return rightSearch;
      } else {
        leftSearch;
      }
      //   return;
    }
    if (arr[middle] < arr[middle - 1]) {
      leftSearch = searchinLeftofPivot(start, end, target);
      if (leftSearch === -1) {
        start = middle + 1;
        end = arr.length - 1;
        rightSearch = searchinRightofPivot(start, end, target);
        console.log(`here`);
        console.log(rightSearch);
        return rightSearch;
      } else {
        return leftSearch;
      }
      //   return middle - 1;
    }
    if (arr[start] > arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
};

value = search(arr, start, end);

console.log(`value:${value}`);
start = 0;
end = value;

// searchinLeftofPivot = function (start, end, target) {
//   console.log(`hey`);
//   while (start <= end) {
//     console.log(`start:${start},end:${end}`);

//     middle = (start + end) / 2;
//     console.log(`middle:${middle}`);
//     if (target > arr[middle]) {
//       start = middle + 1;
//     }
//     if (target < arr[middle]) {
//       end = middle - 1;
//     }
//     if (target === arr[middle]) {
//       return middle;
//     }
//     break;
//   }
//   return -1;
// };
// searchinRightofPivot = function (start, end, target) {
//   while (start <= end) {
//     middle = (start + end) / 2;
//     if (target > arr[middle]) {
//       start = middle + 1;
//     }
//     if (target < arr[middle]) {
//       end = middle - 1;
//     }
//     if (target === arr[middle]) {
//       return middle;
//     }
//   }
//   return -1;
// };

// leftSearch = searchinLeftofPivot(start, end, target);
// if (leftSearch === -1) {
//   start = value + 1;
//   end = arr.length - 1;
//   rightSearch = searchinRightofPivot(start, end, target);
//   console.log(`here`);
//   console.log(rightSearch);
// }
