const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){
        while(arr[i - 1] > arr[i]){
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            i--;
        }
    }
    return arr;
}

console.log(insertionSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]));
// [ 2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50 ]
console.log(insertionSort([29,10,14,37,14]));
// [ 10, 14, 14, 29, 37 ]