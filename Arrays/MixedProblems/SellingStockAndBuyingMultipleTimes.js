/*
Problem statement:
Problem Statement
You have been given stock values/prices for N number of days. 
Every i-th day signifies the price of a stock on that day. 
Your task is to find the maximum profit which you can make by buying and selling the stocks.
*/


let SellingStockAndBuyingMultipleTimes = function (arr) {


    let currentLow = arr[0];
    let currentHigh = arr[0];

    let totalProfit = 0;

    for (let i = 1; i < arr.length; i++) {

        // Calculating local Minima
        if (arr[i - 1] > arr[i] && arr[i + 1] > arr[i]) {
            currentLow = arr[i];
        }

        //Selling after finiding local maxima
        if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i] || i === arr.length - 1) {
            currentHigh = arr[i];

            totalProfit += (currentHigh - currentLow);
        }

        /*

        Alternative without local maxima and minima

        if(a[i]> a[i-1])
            profit += (a[i] - a[i-1]);
         */

    }

    return totalProfit;


}