/**
 * Problem Statement
 * Given two strings ‘STR’ and ‘PTR’. Find all the starting indices of ‘PTR’
   anagram substring in ‘STR’. Two strings are anagram if and only if one string
   can be converted into another string by rearranging the character.  For
   example, ‘ABCD’ and ‘ACBD’ are two anagram strings because‘ACBD’ can be
   converted into ‘ABCD’ by rearranging the ‘B’ and ‘C’. ’ABA’ and‘ABB’ are not
   anagram because we can’t convert ‘ABA’ to ‘ABB’ by rearranging the characters
   of particular strings.  ‘ABACD’ and ‘CABAD’ are anagram because ‘ABACD’ can
   be converted into ‘CABAD’ by rearranging the first ‘A’ with ‘C’ and second
   ‘A’ with ‘B’.

   For example, the given ‘STR’ is ‘BACDGABCD’ and ‘PTR’ is ‘ABCD’. Indices are
   given

0-3 in ‘STR’ index 0,1,2,3 are ‘BACD’ and it is an anagram with ‘ABCD’ 1-4 in
‘STR’ index 1,2,3,4 are ‘ACDG’ and it is not anagram with ‘ABCD’ 2-5 in ‘STR’
index 2,3,4,5 are ‘CDGA’ and it is not anagram with ‘ABCD’ 3-6 in ‘STR’ index
3,4,5,6 are ‘DGAB’ and it is not anagram with ‘ABCD’ 4-7 in ‘STR’ index 4,5,6,7
are ‘GABC’ and it is not anagram with ‘ABCD’ 5-8 in ‘STR’ index 5,6,7,8 are
‘ABCD’ and it is an anagram with ‘ABCD’

Hence there are 2 starting indices of substrings in the string ‘STR’ that are
anagram with given ‘PTR’  which are index 0 and 5.
*/

let AnagramSubstringSearch = function (str, ptr) {

    let start = 0;
    let end = 0;
    let count = [];

    let strMap = new Map();
    let ptrMap = new Map();

    for (let i = 0; i < ptr.length; i++) {
        ptrMap.set(ptr[i], ptrMap.get(ptr[i]) + 1 || 1);
    }

    while (end < str.length) {
        strMap.set(str[end], strMap.get(str[end]) + 1 || 1);

        if (end - start + 1 < ptr.length) {
            end++;
        }
        else {

            if (isAnagram(strMap, ptrMap)) count.push(start);

            if (strMap.get(str[start]) - 1 === 0) {
                strMap.delete(str[start]);
            } else {
                strMap.set(str[start], strMap.get(str[start]) - 1);
            }

            start++;
            end++;

        }

    }

    return count;
}

function isAnagram(strMap, ptrMap) {

    for (let [key, value] of strMap) {
        if (ptrMap.get(key) !== value) return false;
    }

    return true;
}