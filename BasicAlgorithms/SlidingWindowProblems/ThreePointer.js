/**
 * Problem Statement 
 * You are given three arrays X, Y and Z of size A,B and C
 * respectively.
 * Also, all three arrays are sorted in non-decreasing order. Find
 * i, j, k such that : 0 <= i < A, 0 <= j < B, 0 <= k < C and max(abs(X[i] -
 * Y[j]), abs(Y[j] - Z[k]), abs(Z[k] - X[i])) is minimized. Your task is to
 * return the minimum of all the max(abs(X[i] - Y[j]), abs(Y[j] - Z[k]),
 * abs(Z[k] - X[i]))
 *
 * 1. All the arrays are sorted in non-decreasing order.
 * 2. abs(x) denotes the absolute value of x, i.e. if x<0, the abs function
      returns
 * (-x) so that the final value of x becomes positive.
 *
 * Input:
 * 5
 * 1 2 3 4 5
 * 5
 * 1 3 5 7 9
 * 3
 * 2 4 6
 *
 * Output:
 * 1
 * 
 * For firstestcase : One of the possible answer is choose i = 0, j = 0 and k
 * =1. Thus it will 1 answer.
 */


let threePointer = function (arr1, arr2, arr3) {

    // O(N^3) - Time Complexity

    let leastMax = Number.MAX_VALUE;
    let currMax = 0;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            for (let k = 0; k < arr3.length; k++) {

                currMax =
                    Math.max(
                        (Math.abs(arr1[i] - arr2[j])),
                        (Math.abs(arr2[j] - arr3[k])),
                        (Math.abs(arr3[k] - arr1[i])));

                leastMax = Math.min(leastMax, currMax);

                //console.log(i, j, k, currMax, leastMax);
            }
        }
    }

    return leastMax;
}