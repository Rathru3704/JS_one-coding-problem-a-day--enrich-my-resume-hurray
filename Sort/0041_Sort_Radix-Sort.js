// [Criteria]
// Input: A unsorted array of integers
// Output: A sorted array using radix sorting

// Radix Sort (one of the integer sorting algorithms) -
// It never makes comparisons between elements
// Usually it is used with binary numbers
// It exploits the fact that information about the size of a number is encoded in the number of digits => more digits means a bigger number!



// Radix Sort Helper Methods
const getDigit = (num, place) => {
    let digit = Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    return digit;
}
console.log(getDigit(36987, 3));


const digitCount = (num) => {
    let count = 0;

    if(num === 0) return 1;

    while(Math.abs(num) >= 1){
        num = num / 10;
        count++;
    }
    return count;
}
console.log(digitCount(2568));

const digitCount1 = (num) => {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
console.log(digitCount1(2568));


const mostDigits = (arrNum) => {
    let largest = digitCount(arrNum[0]);
    for(let i = 1; i < arrNum.length; i++){
        if(digitCount(arrNum[i]) > largest){
            largest = digitCount(arrNum[i]);
        }
    }
    return largest;
}
console.log(mostDigits([12, 1, 1, 23567, 89, 8934243]));

const mostDigits1 = (arrNum) => {
    let maxDigits = 0;
    for(let i = 0; i < arrNum.length; i++){
        maxDigits = Math.max(maxDigits, digitCount1(arrNum[i]));
    }
    return maxDigits;
}
console.log(mostDigits1([12, 1, 1, 23567, 89, 8934243]));


const radixSort = (arr) => {
    let largest = mostDigits(arr);

    for(let i = 0; i < largest; i++){
        let digitBuckets = Array.from({length: 10}, () => []);  // Sequence generator (range)
        for(let j = 0; j < arr.length; j++){
            let digit = getDigit(arr[j], i);
            digitBuckets[digit].push(arr[j]);
        }
        arr = [].concat(...digitBuckets);  // Merge/flatten an array of arrays
                                           // Spread operator - When ...arr is used in the function call, it ‘expands’ an iterable object arr into the list of arguments.
    }
    return arr;
}
console.log(radixSort([1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29, 340]));