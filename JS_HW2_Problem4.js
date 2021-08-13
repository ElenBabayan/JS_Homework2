// Problem 4

//Given an array of numbers. Write a recursive function to find its minimal positive element. (if such

//    element does not exist, return -1)․

let flag = false;
function minimalPositiveElement(arr) {

    if(arr.length == 0) {
        return -1;
    }

    let min = Number.MAX_VALUE;

    let res = helperFunction(arr, 0, min);

    return !flag ? -1 : res;
}

// [56, -9, 87, -23, 0, -105, 55, 1]

function helperFunction(arr, index, min) {

    if(index >= arr.length) {
        return min;
    }

    if(arr[index] < 0) {
        return helperFunction(arr, index + 1, min);
    } 
    else if (arr[index] < min) {
        min = arr[index];
        flag = true;
    }

    return helperFunction(arr, index + 1, min);

} 

console.log(minimalPositiveElement([-5, -9, -111, -1000, -7]));