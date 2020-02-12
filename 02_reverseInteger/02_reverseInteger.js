var reverse = function(x) {
    var max = Math.pow(2, 31) - 1;
    var min = Math.pow(-2, 31);
    
    if(x < 0){
        var dig = ("" + x).split("").reverse().join("").replace("-", "");
        var digits = parseInt("-" + dig);
        if(digits < min){
            digits = 0;  // When the reversed integer overfolws
        }
    }
    else{
        var digits = parseInt(("" + x).split("").reverse().join(""));
        if(digits > max){
            digits = 0;  // When the reversed integer overfolws
        }
    }
    return digits;
};

reverse(123);
// 321
reverse(-123);
// -321
reverse(120);
// 21
reverse(112233445566778899);
// 0
/*
1032 / 1032 test cases passed.
Runtime: 76 ms
Memory Usage: 35.8 MB
 */