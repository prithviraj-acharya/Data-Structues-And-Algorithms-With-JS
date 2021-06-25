/**
 * Problem Statement
 * Given an array 'A' consisting of 'N' integers, find the
 * smallest subarray of 'A' containing exactly 'K' distinct integers.
 *
 * If more than one such contiguous subarrays exist, consider the subarray
   having the smallest leftmost index.  For example - if A is [1, 2, 2, 3, 1, 3
   ] and k = 2 then the subarrays: [1,2], [2,3], [3,1], [1,3] are the smallest
   subarrays containing 2 distinct elements.  In this case, we will consider the
   starting and ending index of subarray [1,2] i.e. 0 and 1
 *
4 3 1 1 2 1 2

-1

8 3 4 2 2 2 3 4 4 3 3 5

 *
 *
 *
 */

let smallestSubArrWithKDistintElement = function (arr, k) {

    let start = 0;
    let end = 0;

    let startingIndex = 0;
    let endingIndex = 0;
    let minWindowSize = Number.MAX_VALUE;

    let numbersMap = new Map();

    while (end < arr.length) {

        numbersMap = getTotalUniqueNumbers(arr.slice(start, end + 1), numbersMap);

        if (numbersMap.size < k) {
            end++;
        }
        else if (numbersMap.size === k) {

            let windowSize = end - start + 1;

            if (windowSize < minWindowSize) {
                minWindowSize = windowSize;
                startingIndex = start;
                endingIndex = end;
            }

            end++;

        }
        else if (numbersMap.size > k) {

            while (numbersMap.size > k) {

                console.log("HERE!")

                if (numbersMap.get(arr[start]) - 1 === 0) {
                    console.log("HERE TOO!")
                    numbersMap.delete(arr[start]);

                } else {
                    numbersMap.set(numbersMap.get(arr[start]) - 1);
                }

                start++;

            }
            end++;
        }


    }

    if (startingIndex === 0 && endingIndex === 0) {
        return -1;
    }

    return [startingIndex, endingIndex];

}

function getTotalUniqueNumbers(arr, numbersMap) {

    console.log(80, arr);

    let cMap = numbersMap;

    console.log(92, cMap);

    for (let i = 0; i < arr.length; i++) {
        cMap.set(arr[i], cMap.get(arr[i]) + 1 || 1);
    }

    console.log(98, cMap);

    return cMap;

}