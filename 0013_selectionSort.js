const selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        let min = arr[i];
        for(let j = i; j < arr.length; j++){
            if(arr[j] < min){
                min = arr[j];
                [arr[j], arr[i]] = [arr[i], arr[j]];  // swap minimum with first unsorted position
            }
        }
    }
    return arr;
}

console.log(selectionSort([11,2,5,3,7,4]));
// [2, 3, 4, 5, 7, 11]
console.log(selectionSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]));
// [ 2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50 ]
