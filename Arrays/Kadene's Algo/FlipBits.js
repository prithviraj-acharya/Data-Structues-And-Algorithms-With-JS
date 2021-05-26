/*
Problem Statement
You are given an array of integers ARR[] of size N consisting of zeros and ones. You have to select a subset and flip bits of that subset. You have to return the count of maximum one’s that you can obtain by flipping chosen sub-array at most once.
A flip operation is one in which you turn 1 into 0 and 0 into 1.

For Example:
If you are given an array {1, 1, 0, 0, 1} then you will have to return the count of maximum one’s you can obtain by flipping anyone chosen sub-array at most once, so here you will clearly choose sub-array from the index 2 to 3 and then flip it's bits. So, the final array comes out to be {1, 1, 1, 1, 1} which contains five ones and so you will return 5.


*/


let flipBits = function (arr) {

    let contSum = flipNumber(arr[0]);
    let totalSum = 0;

    for (let i = 1; i < arr.length; i++) {

        let num = flipNumber(arr[i]);

        contSum = Math.max(num, num + contSum);
        totalSum = Math.max(contSum, totalSum);

    }

    return totalSum;

}

function flipNumber(num) {
    if (num === 0) return 1
    return num >> 1;
}