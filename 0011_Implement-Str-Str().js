var strStr = function(haystack, needle) {
    // if(needle.length === 0){
    //     return 0;
    // }
    // if(haystack.includes(needle)){
    //     return haystack.indexOf(needle);
    // }
    // else{
    //     return -1;
    // }

    return haystack.indexOf(needle);
};

strStr("hello", "ll");
// 2
strStr("aaaaa", "bba");
// -1
/*
74 / 74 test cases passed.
Runtime: 48 ms
Memory Usage: 33.8 MB
*/