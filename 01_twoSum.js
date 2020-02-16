var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] === target - nums[i]){
                return[i, j];
            }
        }
    }
};

twoSum([2, 7, 11, 15], 9);
// [0, 1]
/*
29 / 29 test cases passed.
Runtime: 92 ms
Memory Usage: 34.7 MB
*/