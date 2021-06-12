/**
 * Problem Statement
 *
 * You are given an array 'ARR' of 'N' positive integers. You need to find the
   length of the longest switching contiguous subarray.  An array is called
   Switching if all the elements at even indices are equal and all the elements
   at odd indices are also equal.

   If the given 'ARR' is [1, 4, 1, 4, 3, 2, 3, 0]. Then {1, 4, 1, 4}, {3, 2, 3},
 * {3, 0}, {0} are some of the switching subarrays. But {1, 4, 3}, {1, 4, 1, 4,
 * 3, 2, 3} are not.
 */

let longestSwitchingSubArr = function (arr) {

    if (arr.length < 2) return arr.length;

    let maxlength = 2;
    let currLength = 2;

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] === arr[i - 2]) {
            currLength += 1;
        } else {
            currLength = 2;
        }

        maxlength = Math.max(maxlength, currLength);
    }

    return maxlength;

}