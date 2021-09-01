// Problem 3

//Write a recursive function to determine whether all digits of the number are odd or not.

function areAllDigitsOdd2(n) {
    
    if(!( n % 2)) {
        return false;
    }
    
    let flag = false;
    
    if(Math.abs(n) < 10) {
        flag = true;
    }

    if(!flag) {
        return isAllDigitsOdd2( Math.floor(n / 10) );
    }
    
    return true;
}

function areAllDigitsOdd3(n) {
    
    if(Math.abs(n) < 10 || n % 2 === 0) {
        return number % 2 === 1;
    }
    
    return areAllDigitsOdd3(Math.floor(n / 10));
    
}


function areAllDigitsOdd4(n) {
    
    if(n === 0) {
        return true;
    }
    
    return n % 10 % 2 ? areAllDigitsOdd3(Math.floor(n / 10)) : false;
    
}

function areAllDigitsOdd(number) {
    // 77195

    if(number == 0) {
        return false;
    }

    if(number > 0 && number <= 9) {
        return number % 2 !== 0;
    }

    let lastDigit = number % 10;
    if( lastDigit % 2 == 0) {
        return false;
    } 
    else {
        number = Math.floor(number / 10);
        return areAllDigitsOdd( number);
    }
}

console.log(areAllDigitsOdd(23));
