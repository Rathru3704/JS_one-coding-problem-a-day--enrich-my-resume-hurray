// [Criteria]
// Input: Must have a sorted array of integers and a number
// Output: If the current array element is equeal to the number, return the index at which the element is found
//         If the number is never found, return -1



// Binary Search 1
const binarySearch1 = (arr, num) => {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    
    while(arr[middle] !== num && left <= right){
        if(num > arr[middle]) left = middle + 1
        else right = middle -1
        middle = Math.floor((left + right) / 2);
    }
    return arr[middle] === num ? middle : -1;
}

console.log(binarySearch1([2,5,6,9,13,15,28,30], 15));
console.log(binarySearch1([2,5,6,9,13,15,28,30], 7));


// Binary Search 2
const binarySearch2 = (arr, num) => {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let middle = Math.floor((left + right) / 2);
        let value = arr[middle];

        if(num > value) left = middle + 1;
        else if(num < value) right = middle - 1;
        else return middle;
    }
    return -1;
}

console.log(binarySearch2([2,5,6,9,13,15,28,30], 15));
console.log(binarySearch2([2,5,6,9,13,15,28,30], 7));