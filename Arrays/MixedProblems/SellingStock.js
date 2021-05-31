/*
Problem statement:
Problem Statement
You have been given stock values/prices for N number of days. 
Every i-th day signifies the price of a stock on that day. 
Your task is to find the maximum profit which you can make by buying and selling the stock one time only.
*/


let SellingStock = function (arr) {


    // Time complexity O(N) Space o(1);

    let maxProfit = 0;
    let minPriceSoFar = arr[0];

    for (let i = 1; i < arr.length; i++) {

        minPriceSoFar = Math.min(minPriceSoFar, arr[i]);

        maxProfit = Math.max(maxProfit, (arr[i] - minPriceSoFar));

    }


    return maxProfit;

    // // Brute Force n(n^2)
    // let maxProfit = 0;

    // for (let i = 0; i < arr.length - 1; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         maxProfit = Math.max(maxProfit, (arr[j] - arr[i]));
    //     }
    // }

    // return maxProfit;

    //---------------------------------------------------------//

    //2nd SOlution using AUx array to store the maximum profits that can be got from the end. 
    //THen subracting it with
    //current value of the array.   
    // Two Pass o(n) time and space.

    // let maxProfit = 0;
    // let max = 0;
    // let auxArr = [];

    // for (let i = arr.length - 1; i >= 0; i--) {

    //     if (arr[i] > max) max = arr[i];

    //     auxArr[i] = Math.max(arr[i], max);

    // }

    // for (let i = 0; i < arr.length; i++) {
    //     maxProfit = Math.max(maxProfit, (auxArr[i] - arr[i]));
    // }

    // return maxProfit;


    //---------------------------------------------------------//
}