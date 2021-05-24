// Given an integer list where each number represents the number of hops you can make, 
// determine whether you can reach to the last index starting at index 0.

// For example, [2, 0, 1, 0] returns True 
// while [1, 1, 0, 1] returns False.



let checkHops = function(arr){

    //let initalVal = arr[0];
    let position = 0;
    
    while(position<arr.length){
        
        if(initalVal!=0){

            postion = arr[0];
            
            if(arr[position] != 0){

                position = arr[position];
            }
            

        }else{
            return false;
        }
       
    }
}


/*
Array.prototype.myFlatMap = function(fn){
    let arr = [];
    for(let i of this ){
        arr.push(...fn(i));
    }
    return arr;
}


var arr = [1, 2, 3, 4];

console.log(arr.flatMap(x => [x, x * 2]));

console.log(arr.myFlatMap(x => [x, x * 2]));






 */