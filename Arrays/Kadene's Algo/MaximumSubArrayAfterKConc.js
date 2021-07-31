/*
You have been given a vector/list 'ARR' consisting of ‘N’ integers. You are also given a positive integer ‘K’.
Let’s define a vector/list 'CONCAT' of size 'N * K' formed by concatenating 'ARR' ‘K’ times. For example, if
'ARR' = [0, -1, 2] and 'K' = 3, then 'CONCAT' is given by [0, -1, 2, 0, -1, 2, 0, -1, 2].  Your task is to
find the maximum possible sum of any non-empty subarray (contagious) of 'CONCAT'.

*/

let MaximumSubArrayAfterKConc = function (arr, k) {
  // Run a loop from 1 to arr.length * k, and create the val and apply kaden's algo;

  let currSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length * k; i++) {
    let val = arr[i % arr.length];

    currSum = Math.max(val, val + currSum);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};
