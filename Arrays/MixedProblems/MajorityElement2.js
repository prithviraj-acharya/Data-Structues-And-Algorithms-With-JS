/*

Problem Statement:
You are given an array/list of integers of length ‘N’, you are supposed to find all the elements that occur 
strictly more than floor(N/3) times in the given array/list.

Sameple:
Input:
3 2 2 1 5 2 3
7 4 4 9 7

Output:
2
4 7

*/

let MajorityElement2 = function (arr) {

    // O(N) time. O(N) Space

    let maxOccurance = Math.floor(arr.length / 3);

    let elementMap = new Map();
    let OccArr = [];

    for (let i = 0; i < arr.length; i++) {

        elementMap.set(arr[i], elementMap.get(arr[i]) + 1 || 1);

        if (elementMap.get(arr[i]) > maxOccurance) OccArr.push(arr[i]);

    }

    return OccArr;

}