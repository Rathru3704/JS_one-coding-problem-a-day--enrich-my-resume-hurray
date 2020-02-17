var longestCommonPrefix = function(strs) {
    if(!strs.length){
        return "";
    }
    
    for(let i = 0; i < strs[0].length; i++){
        for(let str of strs){
            if(str[i] !== strs[0][i]){
                return str.slice(0, i);
            }
        }
    }

    return strs[0];
};

longestCommonPrefix(["flower","flow","flight"]);
// "fl"
longestCommonPrefix(["dog","racecar","car"]);
// ""
/* 
118 / 118 test cases passed.
Runtime: 60 ms
Memory Usage: 35.7 MB
*/
