var searchInsert = function(nums, target) {
    if(nums[0] > target){
        return 0;
    }
    
    if(nums[nums.length - 1] < target){
        return nums.length;
    }

    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= target){
            return i;
        }
    }
};

console.log(searchInsert([1,3,5,6], 5));
// 2
console.log(searchInsert([1,3,5,6], 2));
// 1
console.log(searchInsert([1,3,5,6], 7));
// 4
console.log(searchInsert([1,3,5,6], 0));
// 0
/*
62 / 62 test cases passed.
Runtime: 52 ms
Memory Usage: 33.7 MB
*/