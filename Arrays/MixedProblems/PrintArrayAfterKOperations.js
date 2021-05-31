/*
Problem Statement
You are given an array 'ARR' consisting of 'N' integers and a non-negative integer 'K'. 
Consider an operation on the array as replacing every element 
'ELE' of the array with 'MX - ELE', where 'MX' is the maximum element of the array. 
You need to return the updated array, given that this operation is performed on the array exactly 'K' number of times.

1. The array follows 0-based indexing.
2. Note that after each operation, 
the next operation will be performed on the updated array i.e the array obtained after the last operation.

Input: 
20 15 10 5

Output:
15 10 5 0

The given array’s 0-based indexing is as follows:

In the first operation, maximum = 20.

20    15    10    5     
↓      ↓    ↓     ↓
0      5    10    15

These will be the array values, after one operation.

In the second operation,  maximum = 15.

0      5     10    15     
↓      ↓      ↓     ↓
15     10     5     0

Now the array to be returned is {15, 10, 5, 0}.

*/


let PrintArrayAfterKOperations = function (arr, k) {


    // O(N)

    let highest = arr.reduce((acc, curr) => Math.max(acc, curr), arr[0]);
    let lowest = arr.reduce((acc, curr) => Math.min(acc, curr), arr[0]);

    if (k == 0) return arr;

    if (k % 2 == 0) return arr.map(x => x - lowest);

    else return arr.map(x => highest - x);


    //Brute force:  O(N^2) complexity

    // for (let i = 1; i <= k; i++) {

    //     highest = arr.reduce((acc, curr) => Math.max(acc, curr), arr[0]);

    //     arr = arr.map(x => highest - x);

    // }

    // return arr;

}