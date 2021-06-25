/*
Problem Statement
You have been given an Encrypted String where repetitions of substrings are represented as 
substring followed by the count of substrings.


Example: String "aabbbcdcdcd" will be encrypted as "a2b3cd3".

You need to find the 'K'th character of Decrypted String. Decrypted String would have 1-based indexing.

a2b3cd3
8

outpur: c

S = "a2b3cd3"
Decrypted String of S = "aabbbcdcdcd"
According to 1-based indexing for S, the 8th character is 'c'.
*/

let findKthCharOfDectrypedString = function (str, k) {
  let sum = 0;

  let charStartIndex = 0;
  let charEndIndex = 0;

  let numberStartIndex = 0;
  let numberEndIndex = 0;

  let numberRegex = '/^d+$/';
  let charRegex = '/^[A-Za-z]+$/';

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(numberRegex0)) {
    }
  }
};
