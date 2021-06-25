/*
Problem Statement
You have been given an integer array/list(ARR) of size 'N'. It only contains 0s, 1s and 2s. 
Write a solution to sort this array/list.
*/

let sort012 = function (arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      swap(low, mid, arr);
      mid++;
      low++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      swap(mid, high, arr);
      high--;
    }
  }

  return arr;
};

function swap(idx1, idx2, arr) {
  arr[idx1] += arr[idx2];
  arr[idx2] = arr[idx1] - arr[idx2];
  arr[idx1] = arr[idx1] - arr[idx2];
}
