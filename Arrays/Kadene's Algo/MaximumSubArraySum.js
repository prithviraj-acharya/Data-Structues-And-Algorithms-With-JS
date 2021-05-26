/*
Problem Statement
You are given an array (ARR) of length N, consisting of integers. You have to find the sum of the subarray (including empty subarray) having maximum sum among all subarrays.
A subarray is a contiguous segment of an array. In other words, a subarray can be formed by removing 0 or more integers from the beginning, and 0 or more integers from the end of an array.



*/

let maxSubArraySum = function (arr) {

    let contSum = arr[0];
    let totalSum = 0;

    for (let i = 1; i < arr.length; i++) {

        let num = arr[i];

        contSum = Math.max(num, num + contSum);
        totalSum = Math.max(contSum, totalSum);

    }

    return totalSum;

}
