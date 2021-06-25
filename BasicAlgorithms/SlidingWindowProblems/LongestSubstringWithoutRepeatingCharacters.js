/**
 * Problem Statement:
 * Given a string 'S' of length 'L', return the length of the
 * longest substring without repeating characters.
 *
 * Suppose given input is "abacb", then the length of the longest substring
 * without repeating characters will be 3 ("acb").
 *
 * xyxyz
 * 3
 */

let longestSubString = function (str) {
  let start = 0;
  let end = 0;

  let maxLength = 1;
  let elementMap = new Map();

  while (end < str.length) {
    elementMap.set(str[end], elementMap.get(str[end]) + 1 || 1);

    console.log(elementMap, start, end);
    console.log('window Size: ' + (end - start + 1), elementMap.size);

    if (elementMap.size === end - start + 1) {
      // console.log(28, maxLength);

      maxLength = Math.max(maxLength, end - start + 1);

      end++;

      console.log(maxLength, end);
    } else if (elementMap.size > end - start + 1) {
      console.log(33, end);

      end++;
    } else if (elementMap.size < end - start + 1) {
      console.log('HERE!');

      while (elementMap.size < end - start + 1) {
        if (elementMap.get(str[start]) - 1 === 0) {
          elementMap.delete(str[start]);
        } else {
          elementMap.set(str[start], elementMap.get(str[start]) - 1);
        }

        start++;
      }

      end++;
    }
  }

  console.log(53, end, str.length);
  return maxLength;
};
