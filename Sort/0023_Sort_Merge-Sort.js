const merge = (left, right) => {
    let sortArr = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortArr.push(left.shift());
        }
        else{
            sortArr.push(right.shift());
        }
    }
    // console.log(sortArr);
    return sortArr.concat(left.concat(right));  // need concat() b/c two arrays may not have the same length
}

const mergeSort = (arr) => {  // Split the array into halves and merge them recursively 
    if(arr.length < 2){
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.splice(0, middle);
    const right = arr;

    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]));
// [ 2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50 ]
console.log(mergeSort([27,4,37,44,16,28,7,18,41,1]));
// [ 1, 4, 7, 16, 18, 27, 28, 37, 41, 44 ]