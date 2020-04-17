var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--){
        let lastDigit = digits[i];
        if(lastDigit < 9){
            digits[i] += 1;
            return digits;
        }
        else{
            digits[i] = 0;
        }
    }
    return [1, ...digits];  // Noice! Carry over the digit; Using spread syntax to shallow clone
};

console.log(plusOne([1,2,3]));
// [ 1, 2, 4 ]
console.log(plusOne([4,3,2,1]));
// [ 4, 3, 2, 2 ]
console.log(plusOne([9]));
// [ 1, 0 ]
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,8,5,5,4,3]));
// [ 6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 8, 5, 5, 4, 4 ]
/*
109 / 109 test cases passed.
Runtime: 56 ms
Memory Usage: 33.8 MB
*/