/*

Problem Statement
You are given a string STR of length N.
Your task is to remove all the vowels present in that string and print the modified string.
English alphabets ‘a’, ‘e’, ‘i’, ‘o’, ‘u’ are termed as vowels.
All other alphabets are called consonants.
Note: You have to only remove vowels from the string.
There will be no change in the relative position of all other alphabets.

Example:
Input:

Mobile
CodingNinjas

Output:
Mbl
CdngNnjs

*/


let removeVowels = function (str) {

    return str.split('').filter(x =>
        x !== 'A' && x !== 'a' &&
        x !== 'E' && x !== 'e' &&
        x !== 'I' && x !== 'i' &&
        x !== 'O' && x !== 'o' &&
        x !== 'U' && x !== 'u').join('');

}