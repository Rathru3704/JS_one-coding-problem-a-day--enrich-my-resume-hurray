// A sorted array of integers and a number called num
// Return the index where the number passed to the function is located
// If the number is not found, return -1



// Linear Search; Time Complexity: O(n)
const search1 = (arr, num) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num) return i;
    }
    return -1;
}

console.log(search1([1,2,3,4,5,6], 4));   // 3
console.log(search1([1,2,3,4,5,6], 6));   // 5
console.log(search1([1,2,3,4,5,6], 11));  // -1


// Binary Search; Time Complexity: O(log n)
const search2 = (arr, num) => {
    let min = 0;
    let max = arr.length -1;
    
    while(min <= max){
        let middle = Math.floor((min + max) / 2);
        let value = arr[middle];

        if(value < num) min = middle + 1
        else if(value > num) max = middle - 1
        else return middle;
    }
    return -1;
}

console.log(search2([1,2,3,4,5,6], 4));   // 3
console.log(search2([1,2,3,4,5,6], 6));   // 5
console.log(search2([1,2,3,4,5,6], 11));  // -1