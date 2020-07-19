const countEachChar = (str) => {
    // Create a object
    let res = {};

    // Loop over a string
    const strToLCase = str.toLowerCase();
    for(let i = 0; i < strToLCase.length; i++){
    // for(char of strToLCase){

        // For each character
        // If the char is a number/letter AND is already a key in the object, add one to count
        // If the char is a number/letter AND not in the object, add it to the object and set value to 1
        // If the char is space, period, etc., don't put it in the object
        let char = strToLCase[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){         // RegExpObject.test(string); The test() method tests for a match in a string and it returns true or false.
            if(res[char] > 0){             // You construct a regular expression in one of two ways:
                res[char]++;               // let re = /ab+c/; Using a regular expression literal, which consists of a pattern enclosed between slashes. Regular expression literals provide compilation of the regular expression when the script is loaded. If the regular expression remains constant, using this can improve performance.
            }                              // let re = new RegExp('ab+c'); Calling the constructor function of the RegExp object. Using the constructor function provides runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.
            else{
                res[char] = 1;
            }
            //    res[char] > 0 ? res[char]++ : res[char] = 1;  // Conditional Operator
            // OR res[char] = ++res[char] || 1;
        }
    }
    
    // Return the object
    return res;
}

console.log(countEachChar('   a bbb c ddd'));
console.log(countEachChar('   aavga bbb c ddd'));
console.log(countEachChar('   re fer'));
console.log(countEachChar('aaaa'));
console.log(countEachChar('Hello hi!'));
console.log(countEachChar('Your PIN number is 1234!!'));

