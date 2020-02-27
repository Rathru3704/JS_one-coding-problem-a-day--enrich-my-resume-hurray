var isValid = function(s) {
    const par = {
        ")": "(",
        "]": "[",
        "}": "{",  // Noice! -----------------------------------------
    }                                                               // 
                                                                    // 
    let arr = [];                                                   // 
                                                                    // 
    for(let i = 0; i < s.length; i++){                              // 
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){           // 
            arr.push(s[i]);                                         // 
        }                                                           // 
        else{                                                       // 
            if(arr[arr.length - 1] === par[s[i]]){  //<<--------------
                arr.pop();
            }
            else{
                return false;
            } 
        }
    }
    
    if(arr.length === 0){
        return true;
    }
    else return false;
};

isValid("()");
// true
isValid("()[]{}");
// true
isValid("(]");
// false
isValid("([)]");
// false
isValid("{[]}");
// true
/*
76 / 76 test cases passed.
Runtime: 48 ms
Memory Usage: 35.4 MB
*/