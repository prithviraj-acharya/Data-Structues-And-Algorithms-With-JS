/*

Problem Statement
You are given a string 'STR'. You have to convert the first alphabet of each word in a string to UPPER CASE.

If the given string 'STR' = ”I am a student of the third year” so you have to transform this
string to ”I Am A Student Of The Third Year"

'STR' will contains only space and alphabets both uppercase and lowercase. The words will be separated by space.

*/

let convertFirstWordToAlphabet = function (str) {
  str = str
    .split(' ')
    .map(x => x.replace(x[0], x[0].toUpperCase()))
    .join(' ');

  return str;
};
