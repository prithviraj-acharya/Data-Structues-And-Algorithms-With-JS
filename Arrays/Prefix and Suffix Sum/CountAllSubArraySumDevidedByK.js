/*
Problem Statement
Given an array ‘ARR’ and an integer ‘K’, your task is to find all the count of all sub-arrays whose sum is divisible by the given integer ‘K’.
Note:
If there exists no subarray in the given sequence whose sum is divisible by ‘K’ then simply return ‘0’.
Example:
Suppose the given array is ‘ARR’ = { 5, 0, 2, 3, 1} and ‘K = 5’.
As we can see in below image, there are a total of 6 subarrays that have the total sum divisible by ‘K’
So we return the integer 6.

*/


let CountAllSubArraySumDevidedByK = function (arr, k) {

    //Brute Force.x`

    let totalCount = 0;

    for (let [idx, val] of arr.entries()) {

        if (val % k === 0) totalCount += 1;

        let totalSum = arr[idx];
        let j = idx + 1;

        while (j < arr.length) {

            totalSum += arr[j];

            if (totalSum % k === 0) totalCount += 1;

            j++;

        }


    }

    return totalCount;

}