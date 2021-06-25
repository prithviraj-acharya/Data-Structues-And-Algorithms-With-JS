/**
 * Problem statement You are given an array ‘ARR’ of size ‘N’ and an integer
 * ‘K’. Your task is to find the total number of distinct elements present in
 * every ‘K’ sized window of the array. A ‘K’ sized window can also be viewed as
 * a series of continuous ‘K’ elements present in the sequence.
 *
 * 1. The size of ‘ARR’ will always be greater than or equal to the ‘K’.
2. Here window refers to a subarray of ‘ARR’. Hence ‘K’ sized window means a
   subarray of size ‘K’.
3. You are not required to print the output explicitly. It has already been
   taken care of. Just implement the function and return an array of the count
   of all distinct elements in the ‘K’ size window.
 *
   Consider ARR = [ 1, 2, 1, 3, 4, 2, 3 ] and K = 3.  
   
   As per the given input, we
have a sequence of numbers of length 7, and we need to find the number of
distinct elements present in all the windows of size 3.

Window-1 has three elements { 1, 2, 1 } and only two elements { 1, 2 } are
distinct because 1 is repeating two times.  Window-2 has three elements { 2, 1,
3 } and all three elements are distinct { 2, 1, 3 }.  Window-3 has three
elements { 1, 3, 4 } and all three elements are distinct { 1, 3, 4 }.  Window-4
has three elements { 3, 4, 2 } and all three elements are distinct { 3, 4, 2 }.
Window-5 has three elements { 4, 2, 3 } and all three elements are distinct { 4,
2, 3 }.

Hence, the count of distinct elements in all K sized windows is { 2, 3, 3, 3, 3}.
 *
 *
 *
 */

let countDistictEle = function (arr, k) {
  let start = 0;
  let end = 0;

  let elementMap = new Map();
  let distinctArrForEachWindow = [];

  while (end < arr.length) {
    elementMap.set(arr[end], elementMap.get(arr[end]) + 1 || 1);

    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      distinctArrForEachWindow.push(elementMap.size);

      if (elementMap.get(arr[start]) - 1 === 0) {
        elementMap.delete(arr[start]);
      } else {
        elementMap.set(arr[start], elementMap.get(arr[start]) - 1);
      }
      start++;
      end++;
    }
  }

  return distinctArrForEachWindow;
};
