const quickSort = (arr) => {
    if(arr.length <= 1){
        return arr;
    }

    const [pivot, ...rest] = arr;  // Noice! Set first element as pivot and use spread syntax '...' representing the rest of elements 
    const left = [];
    const right = [];
    rest.forEach(element => {
        if(element < pivot){
            left.push(element);
        }
        else{
            right.push(element);
        }
    });

    return quickSort(left).concat(pivot).concat(quickSort(right));
}

console.log(quickSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]));
// [ 2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50 ]
console.log(quickSort([26, 9, 18, 44, 49, 27, 36, 29, 43, 36, 34, 27]));
// [ 9, 18, 26, 27, 27, 29, 34, 36, 36, 43, 44, 49 ]