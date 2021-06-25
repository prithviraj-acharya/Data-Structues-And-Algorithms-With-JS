/**
 * Problem Statement: You have been given a matrix ‘MAT’ of size 'N' * 'M' (where 'N' and 'M' denote the
 * number of rows and columns respectively) and a positive integer ‘K’.  Your task is to rotate the matrix to
 * the right 'K' times.
 */

let rotateMatrix = function (arr, k) {
  k = k % arr.length;

  for (let i = 0; i < arr.length; i++) {
    rotateArr(arr[i], 0, arr.length - 1);
    rotateArr(arr[i], 0, k - 1);
    rotateArr(arr[i], k, arr.length - 1);
  }

  return arr;
};

function rotateArr(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
}
