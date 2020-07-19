// [Criteria]
// Input: a sorted array of integers
// Output: return an array that includes the first pair where the sum is 0
// Return undefined if a pair does not exist


// Time Complexity - O of n square
const sumZero = (arr) => {
    let sumArr = [];

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                sumArr.push(arr[i]);
                sumArr.push(arr[j]);
                return sumArr;
            }
        }
    }
}

console.log(sumZero([-3,-2,-1,0,1,2,3]));  // [-3, 3]
console.log(sumZero([-2,0,1,3]));  // undefined
console.log(sumZero([1,2,3]));  //undefined



// Multiple Pointers; Time Complexity - O(n)
const sumZeroWithPointers = (arr) =>{
    let left = 0;
    let right = arr.length -1;

    while(left < right){
        let sum = arr[left] + arr[right];

        if(sum === 0) return [arr[left], arr[right]]
        else if(sum > 0) {right--}
        else {left++};
    }
}

console.log(sumZeroWithPointers([-3,-2,-1,0,1,2,3]));  // [-3, 3]
console.log(sumZeroWithPointers([-4,-3,-2,-1,0,1,2,3,10]));  // undefined
console.log(sumZeroWithPointers([1,2,3]));  // undefined