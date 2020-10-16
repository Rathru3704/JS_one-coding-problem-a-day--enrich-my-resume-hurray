// [Criteria]
// Input: a sorted array of integers
// Output: a number which counts the unique values in the array



// w/ a counter
const countUniqueValues1 = (arr) => {
    let counter = 0;
    
    if(arr.length === 0) return counter;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i+1]){
            counter++;
        } 
    }

    return counter;
}

console.log(countUniqueValues1([1,1,1,2]));
console.log(countUniqueValues1([1,2,3,4,4,4,7,12]));
console.log(countUniqueValues1([]));
console.log(countUniqueValues1([-2,-1,-1,0,1]));


// A nifty way; Multiple Pointers
const countUniqueValues2 = (arr) => {
    let i = 0;
    if(arr.length === 0) return i;

    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}

console.log(countUniqueValues2([1,1,1,2]));
console.log(countUniqueValues2([1,2,3,4,4,4,7,12]));
console.log(countUniqueValues2([]));
console.log(countUniqueValues2([-2,-1,-1,0,1]));


// Using Set()
const countUniqueValues3 = (arr) => {
    let set = new Set();
    for(ele of arr){
        set.add(ele);
    }
    return [...set].length;
}

console.log(countUniqueValues3([1,1,1,2]));
console.log(countUniqueValues3([1,2,3,4,4,4,7,12]));
console.log(countUniqueValues3([]));
console.log(countUniqueValues3([-2,-1,-1,0,1]));
