var solution = function (n) {
  while (start <= end) {
    middle = Math.trunc((start + end) / 2);
    if (check(middle)) {
      //  there is a possiblity to check the must be in left side so we need to check
      //   save the value  to a varible
      saveValue = middle;
      end = middle - 1;
    } else {
      end = middle - 1;
    }
  }
};
