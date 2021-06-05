/*
Problem Statement

Given a string ‘STR’ consisting of lower case English letters,
the task is to find the first non-repeating character in the string and return it. If it doesn’t exist, return ‘#’.

For the input string 'abcab', the first non-repeating character is ‘c’.
As depicted the character ‘a’ repeats at index 3 and character ‘b’ repeats at index 4.
Hence we return the character ‘c’ present at index 2.

*/


let firstUniqueChar = function (str) {

    let stringMap = new Map();
    let uniqueString = "#";

    for (let i = 0; i < str.length; i++) {
        stringMap.set(str[i], stringMap.get(str[i]) + 1 || 1);
    }

    for (let [key, val] of stringMap) {

        if (val === 1) {
            uniqueString = key;
            break;
        }
    }

    return uniqueString;
}