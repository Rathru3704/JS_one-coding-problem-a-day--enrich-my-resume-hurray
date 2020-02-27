var romanToInt = function(s) {
    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    
    let sum = 0;
    
    if (!s || s.length === 0) {
        return 0;
    }
    
    for(let i = 0; i < s.length; i++){
        if(roman[s.charAt(i)] < roman[s.charAt(i+1)]){  // Noice!
            sum -= roman[s.charAt(i)];
        }
        else{
            sum += roman[s.charAt(i)];
        }
    }
    
    return sum;
};

romanToInt("III");
// 3
romanToInt("IV");
// 4
romanToInt("IX");
// 9
romanToInt("LVIII");
// 58
romanToInt("MCMXCIV");
// 1994
/*
3999 / 3999 test cases passed.
Runtime: 148 ms
Memory Usage: 40.4 MB
*/