/*

Problem Statement
You are given two versions numbers A and B as a string.
Your task is to compare them and find out which one of them is a newer version.

A = “1.23.45”, B = “1.23.456”

The first two parts of both the strings are the same i.e 1 and 23 and the 
third part of B is greater than the third part of A i.e. 45 < 456, thus string B is the latest version.

*/


let newerVersion = function (str1, str2) {

    version1 = str1.split(".");
    version2 = str2.split(".");

    for (let i = 0; i < version1.length; i++) {

        if (version1[i] > version2[i]) return 1;
        else if (version1[i] < version2[i]) return -1;

    }

    return 0;

}
