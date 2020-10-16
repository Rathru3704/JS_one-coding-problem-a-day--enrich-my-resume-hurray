// A naive and O of n square solution
const sameArr = (aArr, bArr) => {
    if(aArr.length !== bArr.length) return false;

    for(let i = 0; i < aArr.length; i++){
        let index = bArr.indexOf(aArr[i]);  // string.indexOf(searchvalue, start); This method returns -1 if the value to search for never occurs.
        if(index === -1) return false;
        bArr.splice(index, 1);
    }
    return true;
}

console.log(sameArr([1,3,2], [3,2,1]));  // true
console.log(sameArr([1,1,2], [3,2,1]));  // false



// Frequency Counter; O(n) solution
const sameArr2 = (aArr, bArr) => {
    if(aArr.length !== bArr.length) return false;
    let aObj = {};
    let bObj = {};

    // Count each element in two arrays with key-value pairs 
    for(val of aArr){
        aObj[val] = (aObj[val] || 0) + 1;
    }

    for(val of bArr){
        bObj[val] = (bObj[val] || 0) + 1;
    }

    for(key in aObj){
        // Make sure that every key matches bewteen two arrays
        if(!(key in bObj)) return false;  // The in operator returns true if the specified property is in the specified object or its prototype chain.
                                          // What's the difference between in & hasOwnProperty()? The key difference is that in will return true for inherited properties, whereas hasOwnProperty() will return false for inherited properties.
        // Make sure that every count of keys matches bewteen two arrays
        if(aObj[key] !== bObj[key]) return false;
    }

    return true;
}

console.log(sameArr2([1,3,2], [3,2,1]));    // true
console.log(sameArr2([1,1,2,5], [3,2,1]));  // false
