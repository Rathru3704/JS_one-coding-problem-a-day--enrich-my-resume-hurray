var isPalindrome = function(x) {
    return x == ("" + x).split("").reverse().join("");
};

isPalindrome(121);
// true
isPalindrome(-121);
// false
isPalindrome(10);
// false
isPalindrome(0);
// true
/*
11509 / 11509 test cases passed.
Runtime: 208 ms
Memory Usage: 45.9 MB
*/