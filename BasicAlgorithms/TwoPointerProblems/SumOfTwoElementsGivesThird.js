/**
 * You are given an array Arr consisting of n integers, you need to find a valid triplet as explained below.
   An array is said to have a valid triplet {arr[i], arr[j], arr[k]} if there
   exists three indices i, j and k such that i != j, j != k and i != j and
   arr[i] + arr[j] = arr[k] or arr[i] + arr[k] = arr[j] or arr[k] + arr[j] =
   arr[i].

    Arr = 10, 5, 5, 6, 2,
    In this array, the triplet {10, 5, 5} is valid triplet because, 5 + 5 = 10.
 *
 */

let sumOfTwoGivesThree = function (arr) {

    arr.sort((a, b) => b - a);

    for (let i = 0; i < arr.length - 2; i++) {

        if (findTwoSum(arr, i + 1, arr[i])) {
            return true;
        }

    }

    return false;

}

function findTwoSum(arr, start, value) {

    end = arr.length - 1;

   // console.log(value, start, arr)

    while (start < end) {

        let sum = arr[start] + arr[end];

       // console.log(start, end, sum, arr[start], arr[end]);

        if (sum === value) return true;

        if (sum < value) end--;

        else start++;

    }

    return false;


}