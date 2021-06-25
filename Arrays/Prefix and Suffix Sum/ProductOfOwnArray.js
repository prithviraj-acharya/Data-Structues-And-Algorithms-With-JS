/*
Problem Statement
You have been given an integer array/list (ARR) of size N. You have to return an array/list PRODUCT such that PRODUCT[i] is equal to the product of all the elements of ARR except ARR[i]

Input - Output
 1 2 3 - 6 3 2
 5 2 2 - 4 10 10

*/

// This is a brute force technique

let productOfOwnArrayBruteForce = function (arr) {
  let newArr = [];

  for (let [idx, item] of arr.entries()) {
    let toBeSlicedArr = JSON.parse(JSON.stringify(arr));

    let index = toBeSlicedArr.indexOf(item);
    toBeSlicedArr.splice(index, 1);

    let product = 1;

    for (let val of toBeSlicedArr) product = product * val;

    newArr.push(product);
  }

  return newArr;
};

// Order of O(n)

let productOfOwnArray = function (arr) {
  // 1 2 3 - 6 3 2

  let totalProductOfArr = arr.reduce((acc, curr) => acc * curr, 1);

  let myArr = new Array(arr.length)
    .fill(totalProductOfArr)
    .map((val, idx) => val / arr[idx]);

  return myArr;
};
