// Time Complexity: O of n square
var twoSum1 = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] === target - nums[i]){
                return[i, j];
            }
        }
    }
};

console.log(twoSum1([2, 7, 11, 15], 9));
console.log(twoSum1([2, 7, 11, 15], 19));
console.log(twoSum1([3, 2, 4], 6));
// [0, 1]
/*
29 / 29 test cases passed.
Runtime: 92 ms
Memory Usage: 34.7 MB
*/


// Using Hash Table / Object
// Time Complexity: O(n)
const twoSum2 = (nums, target) => {
    let obj = {};

    for(let i = 0; i < nums.length; i++){
        obj[nums[i]] = i;
    }
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if(obj.hasOwnProperty(diff) && obj[diff] !== i){  // obj[diff] !== i -> Cannot be the same element
            return [i, obj[diff]];
        }
    }
    let noSolution = "No two sum solution";
    return noSolution;
}

console.log(twoSum2([2, 7, 11, 15], 9));   // [0, 1]
console.log(twoSum2([2, 7, 11, 15], 19));  // undefined
console.log(twoSum2([3, 2, 4], 6));        // [1, 2]
/*
29 / 29 test cases passed.
Runtime: 68 ms
Memory Usage: 40.9 MB
*/