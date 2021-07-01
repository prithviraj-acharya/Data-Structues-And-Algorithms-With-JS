/**
 *Find Peak Element Given an array of ‘n’ integers arr. Find the Peak element of the array. The peak element
  of an array is defined as that element which is greater than both of its neighbours. I.e if arr[i] is the
  peak element, arr[i-1]<arr[i] and arr[i+1]<arr[i].
 */

let peak = function (arr) {
  let maxCount = 0;
  let maxCountIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) ||
      (i === 0 && arr[i] < arr[i + 1]) ||
      (i === arr.length - 1 && arr[i] > arr[i - 1])
    ) {
      let currCount = 0;

      let left = i - 1;
      let right = i + 1;

      while (left > 0) {
        if (arr[left] > arr[left - 1]) currCount++;
        else break;

        left--;
      }

      while (right < arr.length - 1) {
        if (arr[right] > arr[right + 1]) currCount++;
        else break;

        right++;
      }

      if (currCount > maxCount) {
        maxCount = currCount;
        maxCountIdx = i;
      }
    }
  }

  return arr[maxCountIdx];
};
