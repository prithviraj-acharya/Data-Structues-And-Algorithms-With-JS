/**
 * Problem Statement:
 * You are given a string 'STR' consisting of lower and upper
 * case characters. You need to remove the consecutive duplicates characters,
 * and return the new string.
 * 
 * For a given string, "aaaAAbbcccbd"
 * The new string formed after removing the consecutive duplicates characters
 * will be, "aAbcbd".
 */

let RemovingConsecutiveAlphabets = function (str) {

    let start = 0;
    let newStr = str[start];
    let i = 1;

    while (i < str.length) {

        if (str[i] === str[start]) {
            start++;

        }
        else {
            newStr += str[i];
            start = i;
        }
        
        i++;
    }

    return newStr;

}