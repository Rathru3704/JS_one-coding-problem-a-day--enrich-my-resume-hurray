class HashTable {
    constructor(size=7){  
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;  // The prime number in the hash is helpful in spreading out the keys more uniformly.
                               // It's also helpful if the array that you're putting values into has a prime length.
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;  // The charCodeAt() method returns the Unicode of the character at the specified index in a string.
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        } 
        return total;
    }

    // set() -
    // Accept a key and a value
    // Hash the key
    // Store the key-value pair in the hash table array via separate chaining
    set(key, value){
        let idx = this._hash(key);
        
        if(!this.keyMap[idx]){
            this.keyMap[idx] = [];
        }
        this.keyMap[idx].push([key, value]);
    }

    // get()
    // Accept a key
	// Hash the key
	// Retrieve the key-value pair in the hash table
	// If the key is not found, return undefined
    get(key){
        let idx = this._hash(key);
        
        if(this.keyMap[idx]){
            for(const ele of this.keyMap[idx]){
                if(ele[0] === key){
                    return ele[1];
                }
            }
        }
        
        return undefined;
    }

    keys(){
        let set = new Set();

        if(this.keyMap){
            for(const ele of this.keyMap.flat()){
                set.add(ele[0]);
            }
            return [...set];
        }
    }

    keysWithoutSet(){
        let keysArr = [];

        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }

        return keysArr;
    }

    values(){
        let set = new Set();

        if(this.keyMap){
            for(const ele of this.keyMap.flat()){
                set.add(ele[1]);
            }
            return [...set];
        }
    }

    valuesWithoutSet(){
        let valuesArr = [];

        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }

        return valuesArr;
    }
}

let hashTable1 = new HashTable;
let hashTable2 = new HashTable;

// set()
console.log(hashTable1.set("hash", 1));
console.log(hashTable1.set("test", 2));
console.log(hashTable1.set("festival", 3));
console.log(hashTable1.set("done", 3));
console.log(hashTable1.set("done", 3));

console.log(Object.entries(hashTable1).flat().forEach(ele => {
    console.log(ele); 
 }));
/* 
[ , 
  , 
  , 
  [ [ 'hash', 1 ], [ 'festival', 3 ], [ 'done', 3 ], [ 'done', 3 ] ], 
  [ [ 'test', 2 ] ], 
  , 
] 
*/

// get()
console.log(hashTable1.get("hash"));
console.log(hashTable1.get("test"));
console.log(hashTable1.get("festival"));
console.log(hashTable1.get("done"));
console.log(hashTable1.get("fraud"));

// keys()
console.log(hashTable1.keys());
console.log(hashTable2.keys());
console.log(hashTable1.keysWithoutSet());
console.log(hashTable2.keysWithoutSet());
console.log(hashTable1.keys().forEach(key => {
    console.log(hashTable1.get(key));
}));  // 1,3,3,2

// values()
console.log(hashTable1.values());  // [1,3,2]
console.log(hashTable2.values());  // []
console.log(hashTable1.valuesWithoutSet());
console.log(hashTable2.valuesWithoutSet());

console.log(Object.entries(hashTable1).flat().forEach(ele => {
   console.log(ele); 
}));