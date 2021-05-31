/*

Given An Array Of Integers, Your Task Is To Find The Second Largest Element Present In The Array.
Note:

a) Duplicate elements may be present.

b) If no such element is present return -1.

*/


let SecondLargestElementInArray = function (arr) {

    let largest = arr[0];
    let secondLargest = -1;

    for (let i = 0; i < arr.length; i++) {

        largest = Math.max(largest, arr[i]);

        if (arr[i - 1] > secondLargest && arr[i - 1] < largest) secondLargest = arr[i - 1];

        if (i == arr.length - 1 && arr[i] < largest && arr[i] > secondLargest) secondLargest = arr[i]
    }

    return secondLargest;

}