/**
 * You are given an array “A” of N integers. Your task is to find the maximum
 * element in all K sized contiguous subarrays from left to right.
 * 
 * If A = [3, 2, 3], and K = 2.  Then max of [3, 2] = 3 and max of [2, 3] = 3
   So, the answer will be [3, 3]

If A = [3, 2, 3, 5, 1, 7] and K = 3.  Then max of [3, 2, 3] = 3 Then max of [2,
3, 5] = 5 Then max of [3, 5, 1] = 5 Then max of [5, 1, 7] = 7 So  the answer
will be [3, 5, 5, 7]
 */

let MaximumOfAllSubarraysOfSizeK = function (arr, windowSize) {
  let start = 0;
  let end = 0;
  let windowArr = [];
  let resultantArr = [];

  while (end < arr.length) {
    windowArr.push(arr[end]);

    if (end - start + 1 < windowSize) {
      end++;
    } else {
      // console.log(windowArr, windowArr.reduce((acc, curr) => acc >= curr ? acc : curr, windowArr[0]));

      resultantArr.push(
        windowArr.reduce(
          (acc, curr) => (acc >= curr ? acc : curr),
          windowArr[0]
        )
      );

      windowArr.shift();
      start++;
      end++;
    }
  }

  return resultantArr;
};
