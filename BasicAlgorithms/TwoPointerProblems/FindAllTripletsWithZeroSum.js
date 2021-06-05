/**
 Find all triplets with zero sum

Problem Statement
You are given an array Arr consisting of n integers,
you need to find all the distinct triplets present in the array which adds up to zero.
An array is said to have a triplet {arr[i], arr[j], arr[k]} with 0 sum 
if there exists three indices i, j and k such that i!=j, j!=k and i!=k and arr[i] + arr[j] + arr[k] = 0.

1. You can return the list of values in any order. For example, if a valid triplet is {1, 2, -3}, 
then (2, -3, 1), (-3, 2, 1) etc is also valid triplet. 
Also, the ordering of different triplets can be random i.e if there are more than one valid triplets, 
you can return them in any order.

2. The elements in the array need not be distinct.
3. If no such triplet is present in the array, then return an empty list, 
and the output printed for such a test case will be "-1".

Input
1 2 3 -1 -2 -3

Output
1 2 -3
-1 -2 3
 */

let findAllTriplets = function (array) {

    array.sort((a, b) => a - b);

    let tripletArr = [];

    if (array.length < 3) return -1;

    for (let i = 0; i < array.length - 2; i++) {

        let twoSumArr = findTwoSum(array, i + 1, -array[i]);

      //  console.log("twoSum: " + twoSumArr);

        if (twoSumArr.length > 0) {

            tripletArr.push([array[i], ...twoSumArr]);
        }

    }

    return tripletArr.length > 0 ? tripletArr : -1;

}

function findTwoSum(arr, start, idealSum) {

 //   console.log(start, idealSum);

    end = arr.length - 1;

    while (start < end) {

        let sum = arr[start] + arr[end];

        if (sum === idealSum) return [arr[start], arr[end]];

        else if (sum < idealSum) start++;

        else end--;

    }

    return [];

}