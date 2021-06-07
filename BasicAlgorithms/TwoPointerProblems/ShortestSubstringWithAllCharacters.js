/**
 * You have been given a string 'S' which only consists of lowercase
 * English-Alphabet letters. Your task is to find the shortest (minimum length)
 * substring from 'S' which contains all the characters of 'S' at least once.
 * 
 * If the given string ‘S’ = "abcba", then the possible substrings having all
 * the characters of ‘S’ at least once and of minimum length are "abc" and
 * "cba".  As "abc" starts with a lower index (i.e. 0, "cba" starts with index
 * 2), we will return the string "abc" as our shortest substring that contains
 * all characters of 'S'.
 * 
 * Input:
 * aabcabb
 * abcdcda
 * 
 * Output:
 * abc
 * abcd
 * 
 */

let ShortestSubstringWithAllCharacters = function (str) {

    // O(n^2) time complexity
    let [toatalUniqueChar, _] = getTotalUniqueCharecter(str);


    console.log("TOTAL UNIQUE: " + toatalUniqueChar);

    for (let i = 0; i <= str.length; i++) {
        for (j = i + 1; j <= str.length; j++) {

            let [noOfUniqueChar, sumOfOccurences] = getTotalUniqueCharecter(str.slice(i, j));

            console.log("UNIQUE: " + noOfUniqueChar + " " + sumOfOccurences);

            if (noOfUniqueChar === toatalUniqueChar && sumOfOccurences === toatalUniqueChar) return str.slice(i, j);
        }
    }

    return str;

}

function getTotalUniqueCharecter(str) {

    console.log(str);

    let cMap = {};

    for (let i = 0; i < str.length; i++) {
        cMap[str[i]] = cMap[str[i]] + 1 || 1;
    }

    console.log(Object.keys(cMap) + " " + Object.values(cMap));

    return [Object.keys(cMap).length, Object.values(cMap).reduce((acc, cur) => acc += cur, 0)];

}
