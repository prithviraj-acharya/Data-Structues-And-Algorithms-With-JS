/*
You are given a sorted array A of length N with distinct integers and a target integer M.
 You need to return the position of M if it existed in the array A. 
 If it already exists in A, return that position. (0-based indexing)
For example: If the given array A is: [1, 2, 4, 7] and M = 6.
 We insert M=6 in the array and get A as: [1, 2, 4, 6, 7]. 
 The position of 6 is 3 (according to 0-based indexing) 
*/

let BestPositionToInsertInSortredArr = function (arr, element) {

    let low = 0, high = arr.length - 1;
    let mid;

    while (low <= high) {

        mid = parseInt((low + high) / 2);

        if (arr[mid] <= element) low = mid + 1;
        else high = mid - 1;

    }

    return low;
}