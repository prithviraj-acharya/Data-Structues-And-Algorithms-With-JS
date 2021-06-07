/*

Problem Statement

Given a sequence of ‘N’ space-separated non-negative integers
A[1],A[2],A[3],......A[i]…...A[n]. Where each number of the sequence represents
the height of the line drawn at point 'i'. Hence on the cartesian plane, each
line is drawn from coordinate ('i',0) to coordinate ('i', 'A[i]'), here ‘i’
ranges from 1 to ‘N’. Find two lines, which, together with the x-axis forms a
container, such that the container contains the most area of water.


Find the max amt of water that can be held in the tank
*/

let containerWithMostWater = function (arr) {

    //Not finished

    let start = 0;
    let end = 0;

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] >= arr[end]) {
            end = i;
        }

        if (arr[i] >= arr[start] && arr[i] < arr[end]) {
            start = i;
        }


    }

    console.log(end, start);

    return (end - start) * Math.min(arr[start], arr[end]);

    /**
     * This is O(n^2) time complexity and o(1) space complexity
     */

    // let maxArea = 0;
    // let currArea = 0;

    // for (let i = 0; i < arr.length - 1; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {

    //         currArea = (j - i) * Math.min(arr[i], arr[j]);
    //         maxArea = Math.max(maxArea, currArea);

    //     }
    // }

    // return maxArea;
}