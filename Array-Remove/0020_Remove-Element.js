var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === val){
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
};

removeElement([3,2,2,3], 3);
// [2, 2]
removeElement([0,1,2,2,3,0,4,2], 2);
// [0, 1, 3, 0, 4]
/*
113 / 113 test cases passed.
Runtime: 56 ms
Memory Usage: 33.7 MB
*/