/*
Problem Statement Given an array “A” of N integers and you have also defined the
new array “B” as a concatenation of array “A” for an infinite number of times.
For example, if the given array “A” is [1,2,3] then, infinite array “B” is
[1,2,3,1,2,3,1,2,3,.......].  Now you are given Q queries, each query consists
of two integers “L“ and “R”. Your task is to find the sum of the subarray from
index “L” to “R” (both inclusive) in the infinite array “B” for each query.
Note The value of the sum can be very large, return the answer as modulus
10^9+7.  Input Format : The first line of input contains a single integer T,
representing the number of test cases or queries to be run.

Then the T test cases follow. 

The first line of each test case contains a single integer N, denoting the size
of the array “A”.

The second line of each test case contains N single space-separated integers,
elements of the array “A”.

The third line of each test case contains a single integer Q, denoting the
number of queries.

Then each of the Q lines of each test case contains two single space-separated
integers L, and R denoting the left and the  right index of the infinite array
“B” whose sum is to be returned.  Output Format : For each test case, print Q
space-separated integers that denote the answers of the given Q queries. Print
the answer to each test case in a separate line.  Note You do not need to print
anything, it has already been taken care of. Just implement the given function.
Constraints : 1 <= T <= 100 1 <= N <= 10^4   
1 <= A[i] <= 10^9 1 <= Q <= 10^4 1 <= L <= R <= 10^18

Time Limit: 1sec Sample Input 1 : 1 3 1 2 3 2 1 3 1 5 Sample Output 1 : 6 9
Explanation To Sample Input 1 : For the first test case, the given array A is
[1,2,3] therefore the infinite array “B” will be [1,2,3,1,2,3,1,2,3,.......]. So
the answer for the given first query is 6 because the sum of the subarray from
index 1 to 3 of infinite array “B” i.e. (B[1]+B[2]+B[3]) is 6.

For the given second query is 9 because the sum of the subarray from index 1 to
5 of array “B” .ie (B[1]+B[2]+B[3]+B[4]+B[5]) is 9.  Sample Input 2 : 1 4 5 2 6
9 3 1 5 10 13 7 11 Sample Output 2 : 27 22 28


*/




let sumOfInfiniteArray = function(arr, queriesArray){

    let summationArray = [];

    for(let query of queriesArray){

        let left = query[0];
        let right = query[1];
        let sum = 0;

        let infiniteArr = new Array(right+1).fill(0).map((_, index)=>arr[index%(arr.length)]);

        for(let i = left ; i <= right; i++){

            sum += infiniteArr[i];
        }

        summationArray.push(sum);

    }

    return summationArray;


}