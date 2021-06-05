/*
Problem Statement
Given a string "pattern", which contains only two types of characters ‘(’, ‘)’.
Your task is to find the minimum number of parentheses either ‘(’, ‘)’
 we must add the parentheses in string ‘pattern’ and the resulted string is valid.
Condition for valid string-
Every opening parenthesis ‘(’ must have a correct closing parenthesis ‘)’.
Example - ‘(()(()))’, ‘()()()’, ‘((()))’ are valid string, and ‘(((’, ‘(()’, ‘)(())’ are invalid string.

)((()
((

3
2
*/

let numberOfParenthesis = function (pattern) {

    // To store count of "("
    let openBr = 0;

    // To store count of ")"
    let closeBr = 0;

    // Count of minimum parentheses required
    let count = 0;

    for (let i = 0; i < pattern.length; i++) {
      
        if (pattern.charAt(i) == '(') {
            openBr += 1;
        } else {
            closeBr += 1;
        }

        // If ")" is greater than "("
        if (closeBr > openBr) {
            count += (closeBr - openBr);
            openBr = 0;
            closeBr = 0;
        }
    }

    count += (openBr - closeBr);

    return count;
}