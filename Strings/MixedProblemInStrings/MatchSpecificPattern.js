/*
Match Specific Pattern

Problem Statement
Ninja has given you a list of WORDS and a PATTERN string.
Your task is to find all such words in the list which match the given pattern. 
A valid match is found if and only if every character in the pattern is uniquely mapped to a character in a word.

Example:
Let the list of words be {cod, zcz} and the pattern be ‘nin’.
For each word in the list, we will check whether the word matches the pattern or not:

For the word ‘cod’:
Letter ‘n’ in the pattern maps to letter ‘c’ in the word.
Letter ‘i’ in the pattern maps to letter ‘o’ in the word.
Letter ‘n’ in the pattern maps to letter ‘d’ in the word.

As the same letter ‘n’ in the pattern, maps to two different letters ‘c’ and ‘d’ in the word. Hence, ‘cod’ is not a valid match.

For the word 'zcz':
Letter ‘n’ in the pattern maps to letter ‘z’ in the word.
Letter ‘i’ in the pattern maps to letter ‘c’ in the word.
Letter ‘n’ in the pattern maps to letter ‘z’ in the word.

As every letter in the pattern maps uniquely to a corresponding letter in the word. Hence 'zcz' is a valid match.

Note: Print the words in the same order in which they occur in the list.
You do not need to print anything, it has already been taken care of. Just implement the given function.

Input:
cdd pcm
foo

abcd km qst
pqr

Out:
cdd 
qst 

*/

let matchSpecificPattern = function (str, pattern) {

    let patternMap = new Map();

    for (let i = 0; i < pattern.length; i++) {

        //  console.log(49, patternMap.get(pattern[i])?.number + 1 || 1);

        patternMap.set(pattern[i], {
            number: patternMap.get(pattern[i])?.number + 1 || 1,
            position: patternMap.get(pattern[i])?.position.push[i] || [i]
        })
    }

    return patternMap;

}