/*
Problem Statement
You have been given two strings, let's say 'STR1' and 'STR2' of equal lengths. 
You are supposed to return the minimum number of manipulations required to make the two strings anagrams.


An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase.
We can generalise this in string processing by saying that an anagram of a string is 
another string with the same quantity of each character in it, in any order.

except
accept
buy
bye

2
1

In test case 1, we can change two character of  'STR1' i.e. {'e','x'} to {'a','c'} or 
we can change two character of  'STR2' i.e. {'a','c'} to {'e','x'}, 
to make string anagram. 
So the minimum number of manipulations to make 'STR1' and  'STR2' to anagram string will be 2.

In test case 2, we can change one character of  'STR1' i.e. {'u'} to {'e'} or
we can change one character of  'STR2' i.e. {'e'} to {'u'}, to make string anagram. 
So the minimum number of manipulations to make  'STR1' and 'STR2' to anagram string will be 1.

*/

let anagram = function (str1, str2) {
  let numberOfChange = 0;

  for (let i = 0; i < str1.length; i++) {
    let index = str2.indexOf(str1[i]);

    console.log(str2, index, str1[i]);

    if (index != -1) str2 = str2.replace(str1[i], '');
    else numberOfChange += 1;
  }

  return numberOfChange;
};
