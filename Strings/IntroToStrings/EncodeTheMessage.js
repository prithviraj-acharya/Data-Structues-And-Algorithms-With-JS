/*

Problem Statement
You have been given a text message. You have to return the Run-length Encoding of the given message.
Run-length encoding is a fast and simple method of encoding strings.
The basic idea is to represent repeated successive characters as the character and a single count.
For example, the string "aaaabbbccdaa" would be encoded as "a4b3c2d1a2".

It's guaranteed that the message string will have no digits and consists solely of lowercase alphabetic characters.

aabbc
abcd
abbdcaas

a2b2c1
a1b1c1d1
a1b2d1c1a2s1
*/

let encodeTheMessage = function (str) {
  let localMaxima = 0;
  let encodedStr = '';
  let currAl = str[0];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === currAl) {
      localMaxima += 1;
    } else {
      encodedStr += `${currAl}${localMaxima}`;
      localMaxima = 1;
      currAl = str[i];
    }

    if (i === str.length - 1) encodedStr += `${str[i]}${localMaxima}`;
  }

  return encodedStr;
};
