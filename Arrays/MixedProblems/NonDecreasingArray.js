/*
Problem Statement
You have been given an integer array/list 'ARR' of size 'N'. 
Write a solution to check if it could become non-decreasing by modifying at most 1 element.
We define an array as non-decreasing, if ARR[i] <= ARR[i + 1] holds for every i (0-based) such that (0 <= i <= N - 2).

*/

let NonDecreasingArray = function (arr) {

   // arr = arr.split(" ").map(x => parseInt(x));

    let count = 0;

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] > arr[i + 1]) {
            count += 1;
        }

        if (count > 1) return false;

    }

    return true;

}