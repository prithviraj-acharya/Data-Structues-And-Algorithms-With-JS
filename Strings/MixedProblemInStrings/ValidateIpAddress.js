/*

Problem Statement
You are given the text ‘IPAddress’. Your task is to check if the given text ‘IPAddress’ is a valid ‘IPv4’ or not.

Conditions
1. Text form of ‘IPAddress’ must be ‘a.b.c.d’
2. The values of a,b,c and d can vary from ‘0’ to ‘255’ and both ‘0’ and ‘255’ are inclusive.

123.111.12.k
122.0.330.0
1.1.1.250
1.0.0.0.1

False
False
True
False

*/

let validateIpAddress = function (strIp) {

    let arr = strIp.split('.');

    if (arr.length != 4) return false;

    for (let i = 0; i < arr.length; i++) {
        if (!/^[0-9]+$/.test(arr[i]) || arr[i] < 0 || arr[i] > 255) return false;
    }

    return true;
}