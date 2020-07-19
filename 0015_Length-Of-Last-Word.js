var lengthOfLastWord = function(s) {
    let arr = s.split(' ');
    if(!arr.length){
        return 0;
    }
    for(let i = arr.length - 1; i > 0; i--){
        if(arr[i] === ""){
            arr.pop();
        }
        else break;
    }
    let last = arr[arr.length - 1];
    return last.length;
};

console.log(lengthOfLastWord('Hello World'));
// 5
console.log(lengthOfLastWord('a '));
// 1
console.log(lengthOfLastWord(''));
// 0
console.log(lengthOfLastWord('b  a   '));
// 1
/*
59 / 59 test cases passed.
Runtime: 60 ms
Memory Usage: 33.9 MB
*/