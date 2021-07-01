/*
Problem Statement

You are given an unsorted array/list 'ARR' of 'N' integers.
Your task is to return the length of the longest consecutive sequence.
The consecutive sequence is in the form ['NUM', 'NUM' + 1, 'NUM' + 2, ..., 'NUM' + L]
where 'NUM' is the starting integer of the sequence and 'L' + 1 is the length of the sequence.

For the given 'ARR' [9,5,4,9,10,10,6].

Output = 3
The longest consecutive sequence is [4,5,6].


*/

let LargestConsecutiveSequence = function (arr) {
  let consecutiveArr = [];
  let maxLength = 0;

  arr = [...new Set(arr.sort((a, b) => a - b))];
  //console.log(arr);

  let sequnceL = 0;
  let tempIndex = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    //console.log(arr[i], arr[tempIndex], tempIndex, sequnceL)

    if (arr[i] - arr[tempIndex] === sequnceL) {
      consecutiveArr.push(arr[i]);
      // console.log(consecutiveArr);
      sequnceL += 1;

      maxLength = Math.max(maxLength, consecutiveArr.length);
    } else {
      consecutiveArr = [];
      sequnceL = 0;
      tempIndex = i + 1;
    }
  }

  if (arr[arr.length - 1] - arr[tempIndex] === sequnceL)
    consecutiveArr.push(arr[arr.length - 1]);

  return Math.max(maxLength, consecutiveArr.length);
};
395;
1634;
