// Problem 3

//Write a recursive function to determine whether all digits of the number are odd or not.

function areAllDigitsOdd(number) {
    // 77195

    if(number == 0) {
        return false;
    }

    if(number > 0 && number <= 9) {
        return Math.floor(number % 2) !== 0;
    }

    let lastDigit = Math.floor(number % 10);
    if( Math.floor(lastDigit % 2) == 0) {
        return false;
    } 
    else {
        number = Math.floor(number / 10);
        return areAllDigitsOdd( number);
    }
}

console.log(areAllDigitsOdd(23));