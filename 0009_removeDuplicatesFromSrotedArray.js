var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i + 1]){
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
};

removeDuplicates([1,1,2]);
// [1, 2]
removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
// [0, 1, 2, 3, 4]
/*
161 / 161 test cases passed.
Runtime: 84 ms
Memory Usage: 37.3 MB
*/