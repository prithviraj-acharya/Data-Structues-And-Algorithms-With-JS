/*
Problem Statement
You are given an integer array 'ARR' of size 'N' and an integer 'S'. 
Your task is to return the list of all pairs of elements such that each sum of elements of each pair equals 'S'.
*/



let ValidPairs = function (arr, div, rem) {

    let pairArr = [];

    for (let i = 0; i < arr.length; i++) {

        pairingIndex = arr.indexOf(arr.find(x => {
            return (arr[i] + x) % div === rem
        }));

        if (pairingIndex !== -1 && pairingIndex != i) {

            pairArr.push([arr[i], arr[pairingIndex]]);

        }

    }

    console.log(pairArr);

    return pairArr.length >= arr.length / 2;

    // let pairArr = [];

    // if (arr.length % 2 !== 0) return false;

    // for (let i = 0; i < arr.length - 1; i++) {

    //     for (let j = i + 1; j < arr.length; j++) {

    //         let sum = arr[i] + arr[j];

    //         if (sum % div === rem) {

    //             pairArr.push([arr[i], arr[j]]);
    //         }
    //     }

    // }

    // console.log(pairArr);

    // return pairArr.length >= arr.length / 2;


}
