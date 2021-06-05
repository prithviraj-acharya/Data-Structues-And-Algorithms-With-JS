/*

Problem Statement
You are given a string 'S' of length 'N' consisting of lowercase English alphabet letters. 
You are also given a positive integer 'K'.
Now, a substring of this string is good if it contains at most 'K' distinct characters.
A string 'X' is a substring of string 'Y' if it can be obtained by deletion of several 
continuous elements(possibly zero) from the beginning and the end from the string 'Y'.
Your task is to return the maximum size of any good substring of the string 'S'.

‘S’ = “bacda” and ‘K’ = 3.

So, the substrings having at most ‘3’ distinct characters are called good substrings. Some possible good substrings are:
1. “bac”
2. “acd”
3. “acda”

The substring “acda” is the largest possible good substring, 
as we cannot get any other substring of length 5 or more having distinct characters 
less than or equal to ‘3’. Thus, you should return ‘4’ as the answer.

*/


let longestSubString = function (str, distinctChar) {

    let count = 0;

    for (let i = 0; i <= str.length; i++) {

        for (j = i + 1; j <= str.length; j++) {

            if (findNumberOfDistChar(str.slice(i, j)) === distinctChar) count += 1;
        }
    }

    return count;
}

function findNumberOfDistChar(subString) {

    console.log(subString);

    let stringMap = new Map();

    for (let i = 0; i < subString.length; i++) {
        stringMap.set(subString[i], stringMap.get(subString[i]) + 1 || 1);
    }

    console.log(stringMap);

    return stringMap.size;

}