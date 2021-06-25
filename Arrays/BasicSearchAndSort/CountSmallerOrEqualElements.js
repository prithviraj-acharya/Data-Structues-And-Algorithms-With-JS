/*
You are given two arrays of integers. 
Let's call the first array A and the second array B.
A finds the number of elements in array B that are smaller than or equal to that element for every array element. 

A = [2, 3, 0] , B = [5, 1]

For the first index, A[0] = 2
In array B only 1 is less than 2. Therefore the answer for the first index is 1.

For the second index, A[1] = 3
In array B only 1 is less than 3. Therefore the answer for the second index is also 1.

For the third index, A[2] = 0
Both the elements of array B are greater than 0. 
Therefore the answer for the third index is 0.

Hence, the final answer is [1,1,0] in this case.

*/

let CountSmallerOrEqualElements = function (arr1, arr2) {
  let shortArr = [];

  arr2.sort((a, b) => a - b);

  for (let i = 0; i < arr1.length; i++) {
    shortArr.push(isFoundByBinarySearch(arr2, arr1[i]));
  }

  return shortArr;
};

function isFoundByBinarySearch(arr, element) {
  let low = 0,
    high = arr.length - 1;
  let mid;

  while (low <= high) {
    mid = parseInt((low + high) / 2);

    if (arr[mid] <= element) low = mid + 1;
    else high = mid - 1;
  }

  return low;
}
