// [Criteria]
// Input: A unsorted array of integers
// Output: A sorted array using bubble sorting which is a sorting algorithm where the largest values bubble up to the top



// Naive solution 1
const bubbleSort1 = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i+1]){
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            i = i - 2;
        }
    }
    return arr;
}

console.log(bubbleSort1([3,44,38,5,47,15,36,26,27,47,2,46,4,19,50,48]));


// Naive solution 2
const bubbleSort2 = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort2([3,44,38,5,47,15,36,26,27,47,2,46,4,19,50,48]));


// Optimized solution (if no swap, don't run the loop)
// Time Complexity - O(n^2)
const bubbleSort3 = (arr) => {
    let swap = false;                     // Noice!
    for(let i = arr.length; i > 0; i--){  // Noice!
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swap = true;
            }
        }
        if(!swap) break;
    }
    return arr;
}

console.log(bubbleSort3([0,2,34,22,10,19,17]));  // [ 0, 2, 10, 17, 19, 22, 34 ]