/*

Problem Statement
Given two arrays, 'AT' and 'DT', representing the arrival and
departure times of all trains that reach a railway station,
the task is to find the minimum number of platforms required
for the railway station so that no train needs to wait.

1. You don't need to print the output, it has already been taken care of. You just need to implement the given function.

2. Time will be given in 24H format and colons will be omitted for convenience. For example, 9:05AM will be given as "905", or 9:10PM will be given as "2110".

3. Also, there will be no leading zeroes in the given times. For example, 12:10AM will be given as “10” and not as “0010”.

Input:

900 940 950 1100 1500 1800
910 1200 1120 1130 1900 2000

100 200 300 400
200 300 400 500

OutPut:
3
1
*/

let MinNumberOfPlatforms = function (arrivalArr, dipartureArr) {

    let currPlatformNumReq = 1;
    let maxPlatformNumReq = 1;

    arrivalArr.sort((a, b) => a - b);
    dipartureArr.sort((a, b) => a - b);


    let arrival = 1;
    let diparture = 0;

    while (arrival < arrivalArr.length && diparture < dipartureArr.length) {

        if (arrivalArr[arrival] < dipartureArr[diparture]) {

            arrival++;
            currPlatformNumReq++;

        } else {

            diparture++
            currPlatformNumReq--;
        }

        maxPlatformNumReq = Math.max(maxPlatformNumReq, currPlatformNumReq);
    }

    return maxPlatformNumReq;
}