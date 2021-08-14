/**
 * Problem Statement You have been given two strings ‘STR1’ and ‘STR2’.  Your
 * task is to find if‘STR1’ is a subsequence of ‘STR2’.  A subsequence of a
 * string is a new string that can be derived from the original string by
 * deleting some characters (can be none) without changing the relative ordering
 * of other characters.

   ‘ACE’ is a subsequence of ‘ABCDE’ because ‘ACE’ can be formed by deleting ‘B’
 * and ‘D’ without changing the relative order of characters. ‘ADB’ is not a
 * subsequence of ‘ABCDE’ because we can get ‘ABD’ from ‘ABCDE’ but not ‘ADB’
 * and in ‘ADB’ relative order of ‘B’ and ‘D’ are different from original
 * strings.
 */

let isSubSequence = function (str, seq) {
  seqIndex = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === seq[seqIndex]) seqIndex += 1;
  }

  return seqIndex === seq.length;
};
