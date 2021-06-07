/**
 * Problem Statement
   You are given an array/list ARR consisting of N integers. Your task is to
   find all the distinct triplets present in the array which adds up to a given
   number K.  An array is said to have a triplet {ARR[i], ARR[j], ARR[k]} with
   sum = 'K' if there exists three indices i, j and k such that i!=j, j!=k and
   i!=j and ARR[i] + ARR[j] + ARR[k] = 'K'.


   Input:
   10 5 5 5 2
   12

   Output:  
   5 5 2

 */


let tripletWithGivenSum = function (arr, givenSum) {

    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 2; i++) {

        let twoSumArr = twoSum(arr, i + 1, givenSum - arr[i]);

        //console.log(twoSumArr);

        if (twoSumArr.length === 2) return [arr[i], ...twoSumArr];
    }

    return -1;

}

function twoSum(arr, start, value) {

    let end = arr.length - 1;

    //console.log(arr, start, end, value);

    while (start < end) {

        let currSum = arr[start] + arr[end];

        //console.log(currSum);

        if (currSum === value) return ([arr[start], arr[end]]);

        if (currSum < value) start++;

        else end--;
    }

    return [];

}