/**
 * Problem Statement Given an array 'arr' of 'N' integers and an integer 'K'.
 * The array 'arr' may contain duplicate integers. Return "true" if the array
 * contains any duplicate element within the 'K' distance from each other,
 * otherwise, return "false".
 *
 *  2
    3 4 9 4 2
    true

    10 4
    3 2 0 -4 7 -9 -8 10 5 -1
    false

 *
 *
 */

let CheckDuplicateWithinKDistance = function (arr, k) {
  let start = 0;
  let end = 0;
  let elementMap = new Map();

  windowSize = k + 1;

  while (end < arr.length) {
    elementMap.set(arr[end], elementMap.get(arr[end]) + 1 || 1);

    if (end - start + 1 < windowSize) {
      end++;
    } else if (end - start + 1 === windowSize) {
      for (let value of elementMap.values()) {
        if (value > 1) return true;
      }

      if (elementMap.get(arr[start]) - 1 === 0) {
        elementMap.delete(arr[start]);
      } else {
        elementMap.set(arr[start], elementMap.get(arr[start]) - 1);
      }

      start++;
      end++;
    }
  }

  return false;
};
