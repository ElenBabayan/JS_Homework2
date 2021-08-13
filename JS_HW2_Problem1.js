//Problem 1

//Write a function which receives an array and a number as arguments and returns a new array
//from the elements of the given array which are larger than the given number.

function greaterThanNumberUsingFilter(arr, number) {
    res = arr.filter( e => e > number);

    if(res.length === 0) 
        return "Such values do not exist.";

    return res;
    
}

function greaterThanNumber(arr, number) {
    let res = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > number)
            res.push(arr[i]);
    }
    if(res.length === 0) 
        return "Such values do not exist.";
    return res;
}

console.log(greaterThanNumberUsingFilter([1,4,5,6,3,12,45,8,44], 10));

console.log(greaterThanNumber([1, 1, 2, -3, 0, 8, 4, 0], 9));