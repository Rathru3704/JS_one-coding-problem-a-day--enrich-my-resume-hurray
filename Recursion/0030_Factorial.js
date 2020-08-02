// Iteration
const factorial_01 = (num) => {
    let total = 1;
    for(let i = 2; i <= num; i++){
        total *= i;
    }
    return total;
}

console.log(factorial_01(3));
console.log(factorial_01(4));
console.log(factorial_01(5));


// Recursion
const factorial_02 = (num) => {
    // if(num < 0) return 0;
    if(num === 1) return 1;  // Base case; the condition when the recursion ends
    return num * factorial_02(num -1);
}

console.log(factorial_02(3));
console.log(factorial_02(4));
console.log(factorial_02(5));