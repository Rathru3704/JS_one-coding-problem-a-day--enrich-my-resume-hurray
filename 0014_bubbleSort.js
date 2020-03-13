const bubbleSort = (arr) => {  // compare to the neighbor and swap each other
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i+1]){
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            i = i - 2;
        }
    }
    return arr;
}

console.log(bubbleSort([3,44,38,5,47,15,36,26,27,47,2,46,4,19,50,48]));
// [ 2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 47, 48, 50 ]
console.log(bubbleSort([41,7,9,43,1,19,14,49,44,8,20,24,4,48,38,13,33,4]));
// [ 1, 4, 4, 7, 8, 9, 13, 14, 19, 20, 24, 33, 38, 41, 43, 44, 48, 49 ]
