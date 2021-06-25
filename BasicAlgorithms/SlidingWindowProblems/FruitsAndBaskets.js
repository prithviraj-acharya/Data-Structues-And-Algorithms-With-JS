/**
 * Problem Statement
 * There are ‘n’ fruit trees that are planted along a road. The trees are
   numbered from 0 to n-1. The type of fruit each tree bears is represented by
   an uppercase character of the English alphabet. A Ninja is walking along that
   road. He has two baskets and wants to put the maximum number of fruits in
   them. The restriction is that each basket can have only one type of fruit.
   Ninja can start with any tree and end at any tree, but once he has started he
   cannot skip a tree i.e if he picks fruit from the tree ‘i’, then he has to
   pick fruit from tree ‘i+1’ before going to the tree ‘i+2’. He will pick one
   fruit from each tree until he cannot, i.e, he will stop when he has to pick a
   fruit of the third type because both the baskets can be filled by only two
   different fruits.  You are given a string ‘str’ consisting of the ‘n’
   uppercase character of the English alphabet. The ‘i’th character in this
   string represents the type of fruit tree ‘i’ bears. Return the maximum number
   of fruits ninja can put in both the baskets after satisfying all the given
   conditions.

   AABC
   A

   3
   1 
 * 
 */

let fruitsAndBasket = function (str) {
  //Maximum length of a substring with 2 distict characters

  let start = 0;
  let end = 0;

  let fruitMap = new Map();

  maxCountOfFruits = 0;

  while (end < str.length) {
    fruitMap.set(str[end], fruitMap.get(str[end]) + 1 || 1);

    if (fruitMap.size <= 2) {
      maxCountOfFruits = Math.max(
        maxCountOfFruits,
        calculateTotalChars(fruitMap.values())
      );
    } else if (fruitMap.size > 2) {
      while (fruitMap.size > 2) {
        if (fruitMap.get(str[start]) - 1 === 0) {
          fruitMap.delete(str[start]);
        } else {
          fruitMap.set(str[start], fruitMap.get(str[start]) - 1);
        }

        start++;
      }
    }

    end++;
  }

  return maxCountOfFruits;
};

let calculateTotalChars = values =>
  [...values].reduce((acc, curr) => (acc += curr), 0);
