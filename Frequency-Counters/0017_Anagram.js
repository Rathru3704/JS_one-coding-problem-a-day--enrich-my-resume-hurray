// write code to check if two strings are anagrams (trap - tarp, listen - silent, flees - feels)

var anagramCheck0 = (a, b) => {
    // change string to array and sort alphabetically
    let aArr = a.split('').sort();
    let bArr = b.split('').sort();
    
    // loop aArr and if bArr contains aArr's element, splice it
    for(ele of aArr){
        if(bArr.includes(ele)){
            let index = bArr.indexOf(ele);
            bArr.splice(index, 1);
        }
    }
    
    // if the length of bArr eaquls to zero, that means aArr matches bArr; a is an anagram of b
    if(bArr.length === 0){
        return true
    }
    else return false
}

console.log(anagramCheck0('', ''));
console.log(anagramCheck0('trap', 'tarp'));
console.log(anagramCheck0('rat', 'car'));
console.log(anagramCheck0('aaz', 'zza'));



// Frequency Counters 1 - two objects
const anagramCheck1 = (str1, str2) => {
    if(str1.length !== str2.length) return false;

    let obj1 = {};
    let obj2 = {};
    for(char of str1){
        obj1[char] = (obj1[char] || 0) + 1;
    }
    for(char of str2){
        obj2[char] = (obj2[char] || 0) + 1;
    }

    for(key in obj1){
        if(!(obj2.hasOwnProperty(key))) return false;
        if(obj1[key] !== obj2[key]) return false;
    }

    return true;
}

console.log(anagramCheck1('', ''));
console.log(anagramCheck1('trap', 'tarp'));
console.log(anagramCheck1('rat', 'car'));
console.log(anagramCheck1('aaz', 'zza'));



// Frequency Counters 2 - one object
const anagramCheck2 = (str1, str2) => {
    if(str1.length !== str2.length) return false;

    let obj = {};
    // Loop str1 and count each of char by key-value pairs 
    for(char of str1){
        obj[char] = (obj[char] || 0) + 1;
        console.log(obj);
    }

    for(char of str2){
        if(!obj[char]) return false;  // !0 => true; !1 => false
        else{obj[char] -= 1;}  
    }

    return true;
}

console.log(anagramCheck2('', ''));
console.log(anagramCheck2('trap', 'tarp'));
console.log(anagramCheck2('rat', 'car'));
console.log(anagramCheck2('aaz', 'zza'));