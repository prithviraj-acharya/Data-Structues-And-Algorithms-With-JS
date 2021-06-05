/*

Problem Statement
You are given a number 'N' in the form of a string 'S', 
your task is to find the smallest number strictly greater than the given number 'N' which is a palindrome.

1) A palindrome is a word, number, phrase, or another sequence of characters that reads the same backward as forward,
 such as 'naman', 'abcba', '1234321', etc
2) The numerical value of the given string 'S' will be greater than 0.
3) A single-digit number is also considered as a palindrome.
4) Note that the length of the string 'S' is nothing but the number of digits in the number 'N'.

4
1221

1331

The next smaller palindrome to 1221 is 1331, 
as it is strictly greater than 1221 and it reads the same from the front and back both.

3
999
1001

*/


let smallestPalindrome = function (str) {

    let flag = false;
    let number = parseInt(str) + 1;

    while (!flag) {

        if (isPalindrome(number.toString())) {
            flag = true;
            break;
        }

        number++;

    }

    if (flag) return number;
}

function isPalindrome(num) {

    for (let i = 0; i < parseInt(num.length / 2); i++) {

        if (num[i] != num[num.length - 1 - i]) return false;
    }

    return true;

}