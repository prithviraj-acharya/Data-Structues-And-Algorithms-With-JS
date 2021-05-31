/*
Problem Statement
You are given an array 'ARR' of 'N' distinct integers.

Your task is to find the product 'P' with the highest count('C') of quadruples which follow p * q = r * s 
where p, q, r, and s are elements of the array with different indexes.
*/



let MaxProductCount = function (arr) {


    let map = new Map();


    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length; j++) {

            let product = arr[i] * arr[j];

            map.set(product, map.get(product) + 1 || 1);

        }
    }

    return map;

}
