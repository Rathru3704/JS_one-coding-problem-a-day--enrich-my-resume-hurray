// A sorted/unsorted array of integers and a number called num
// Calculate the maxmimum sum of num consecutive elements in the array



// An O of n square solution
const maxSubarraySum1 = (arr, num) => {
    if(num > arr.length) return null;

    let max = -Infinity;
    for(let i = 0; i < arr.length - num + 1; i++){
        temp = 0;
        for(let j = 0; j < num; j++){
            temp += arr[i + j];
            // console.log(temp)
        }
        if(temp > max) max = temp; 
    }
    return max;
}

console.log(maxSubarraySum1([1,2,5,2,8,1,5], 2));  // 10
console.log(maxSubarraySum1([1,2,5,2,8,1,5], 4));  // 17
console.log(maxSubarraySum1([4,2,1,6], 1));  // 6
console.log(maxSubarraySum1([4,2,1,6,2], 4));  // 13
console.log(maxSubarraySum1([], 4));  // null


// O(n) solution
const maxSubarraySum2 = (arr, num) => {
    if(num > arr.length) return null;

    let temp = 0;
    let max = 0;
    for(let i = 0; i < num; i++){
            max += arr[i];
    }
    temp = max;
    for(let i = num; i < arr.length; i++){
        temp = temp - arr[i - num] + arr[i];
        if (temp > max) max = temp;
        // max = Math.max(max, temp);
    }
    return max;
}

console.log(maxSubarraySum2([1,2,5,2,8,1,5], 2));
console.log(maxSubarraySum2([1,2,5,2,8,1,5], 4));
console.log(maxSubarraySum2([4,2,1,6], 1));
console.log(maxSubarraySum2([4,2,1,6,2], 4));
console.log(maxSubarraySum2([], 4));