arr = [1, 3, 4, 5, 6, 7];
start = 0;
end = arr.length - 1;
let binarySearchInLeft = function (start, end) {
  while ((start, end)) {
    // middle = (start + end) / 2;
    console.log(`start:${start + 1}`);
    console.log(`here ${++start}`);
    if (++start === arr[++start] && arr[end - 1] === arr[end--]) {
      console.log(arr[start]);
      console.log(arr[end]);

      start = start++;
      end = end--;
    } else {
      console.log(`hey ${start} and ${end}`);
      break;
    }
  }
};

binarySearchInRight = function () {};

while ((start, end)) {
  middle = (start + end) / 2;
  //  search in left side
  end = middle;
  binarySearchInLeft(start, end);
  console.log(`here`);
  break;
  // search in right side
  start = middle;
  binarySearchInRight(start, end);
}
