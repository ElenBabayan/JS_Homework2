//Problem 2

//Write a function, which receives two numbers as arguments and finds all numbers between
//them such that each digit of the number is even. The numbers obtained should be printed in a

//comma-separated sequence on a single line.

function eachDigitIsEven(number1, number2) {
    
    let res = [];
    for(let i = number1; i <= number2; i++) {
        if(isAllEven(i)) {
            res.push(i);
        }
    }

    if(res.length === 0) {
        return "Such numbers does not exist."
    }

    return res

}

function isAllEven(number) {
    let tmp = number;
    let isEven = true;
    while(tmp > 0) {
        let digit = Math.floor(tmp % 10);
        if(digit % 2 !== 0){
            isEven = false;
        }
        tmp = Math.floor(tmp / 10);
    }

    return isEven;
}

console.log(eachDigitIsEven(10,20));