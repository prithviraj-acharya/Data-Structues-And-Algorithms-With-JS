/*
You are given a sorted array Arr consisting of N integers and an integer X,
you need to find the first and last position of occurrence of X in the array.

1. The array follows 0-based indexing, so you need to return 0-based indices.
2. If X is not present in the array, return “-1 -1”.
3. If X is only present once in the array, the first and last position of its occurrence will be the same.
*/

let FirstAndLastElementOfSortedArray = function (arr, element) {
  let firstOcc = getFirstOccurance(arr, element, true);
  let lastOcc = getFirstOccurance(arr, element, false);

  return firstOcc + ' ' + lastOcc;
};

function getFirstOccurance(arr, element, left) {
  let low = 0;
  let high = arr.length;
  let res = -1;

  while (low <= high) {
    mid = parseInt((low + high) / 2);

    if (arr[mid] === element) {
      res = mid;
      if (left) high = mid - 1;
      else low = mid + 1;
    } else if (element < arr[mid]) high = mid - 1;
    else low = mid + 1;
  }

  return res;
}
