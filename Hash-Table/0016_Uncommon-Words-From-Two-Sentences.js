// We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
// Return a list of all uncommon words. 
// You may return the list in any order.
// 0 <= A.length <= 200
// 0 <= B.length <= 200
// A and B both contain only spaces and lowercase letters.

var uncommonFromSentences = function(A, B) {
    const aArr = A.split(" ").sort();
    const bArr = B.split(" ").sort();
    const abArr = aArr.concat(bArr);
    let obj = {};
    let uncommonArr = [];
    
    for(ele of abArr){
        obj[ele] > 0 ? obj[ele]++ : obj[ele] = 1
    }
    
    for(prop in obj){
        if(obj[prop] === 1) uncommonArr.push(prop)
    } 

    return uncommonArr;
};

console.log(uncommonFromSentences("this apple is sweet apple", "this apple is sour"));
// [ 'sweet', 'sour' ]
console.log(uncommonFromSentences("apple apple", "banana"));
// [ 'banana' ]
console.log(uncommonFromSentences("apple is apple", "banana"));
// [ 'is', 'banana' ]
/*
53 / 53 test cases passed.
Runtime: 72 ms
Memory Usage: 33.9 MB
*/


var uncommonFromSentences2 = function(A, B) {
    let aArr = A.split(' ').sort();
    let bArr = B.split(' ').sort();
    let aObj = {};
    let bObj = {};
    let uncommon = [];

    for(ele of aArr){
        aObj[ele] = (aObj[ele] || 0) + 1;
    }

    for(ele of bArr){
        bObj[ele] = (bObj[ele] || 0) + 1;
    }

    for(key in aObj){
        if(!bObj[key] && aObj[key] === 1){
            uncommon.push(key);
        }
    }

    for(key in bObj){
        if(!aObj[key] && bObj[key] === 1){
            uncommon.push(key);
        }
    }

    return uncommon;
};

console.log(uncommonFromSentences2("this apple is sweet apple", "this apple is sour"));
console.log(uncommonFromSentences2("apple apple", "banana"));
console.log(uncommonFromSentences2("apple is apple", "banana"));