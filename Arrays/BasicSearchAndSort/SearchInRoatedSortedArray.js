/*
Problem Statement Aahad and Harshit always have fun by solving problems. Harshit
took a sorted array and rotated it clockwise by an unknown amount. For example,
he took a sorted array = [1, 2, 3, 4, 5] and if he rotates it by 2, then the
array becomes: [4, 5, 1, 2, 3].  After rotating a sorted array, Aahad needs to
answer Q queries asked by Harshit, each of them is described by one integer Q[i]
which Harshit wanted him to search in the array. For each query, if he founds
it, he had to shout the index of the number, otherwise, he had to shout -1.

2 5 -3 0

2 5

*/


let SearchInRoatedSortedArray = function (arr, element) {

    let mid = 0;
    let low = 0;
    let high = arr.length - 1;
    let n = arr.length;

    if (arr[low] < arr[high]) return mid = low;

    while (low <= high) {

        mid = parseInt((low + high) / 2);

        let next = (mid + 1) % n;
        let prev = (mid + n - 1) % n;

        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) break;

        if (arr[mid] <= arr[high]) high = mid - 1;

        else low = mid + 1;
    }

    low = 0;
    high = arr.length - 1;

    return isFoundByBinarySearch([...arr.slice(0, mid), ...arr.slice(mid, arr.length)], element)

}

function isFoundByBinarySearch(arr, element) {

    let low = 0, high = arr.length - 1;

    while (low <= high) {

        let mid = parseInt((low + high) / 2);

        if (element === arr[mid]) return mid;

        else if (element < arr[mid]) high = mid - 1;

        else low = mid + 1;
    }

    return -1;

}



