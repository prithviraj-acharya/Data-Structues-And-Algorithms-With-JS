/*
Problem Statement You are given an integer array 'ARR' of size 'N' and an integer 'S'.  Your task is to return
the list of all pairs of elements such that each sum of elements of each pair equals 'S'.
*/

let PairSum = function (arr, sum) {
  let pairArr = [];

  for (let i = 0; i < arr.length; i++) {
    pairingIndex = arr.indexOf(sum - arr[i]);

    if (pairingIndex !== -1 && pairingIndex != i) {
      pairArr.push([arr[i], arr[pairingIndex]]);

      arr[i] = Number.MAX_VALUE;
      arr[pairingIndex] = Number.MAX_VALUE;
    }
  }

  return pairArr;

  // let pairArr = [];

  // for (let i = 0; i < arr.length - 1; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //         if (arr[i] + arr[j] === sum) pairArr.push([arr[i], arr[j]])
  //     }
  // }

  // return pairArr;
};
