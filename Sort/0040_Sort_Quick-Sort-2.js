// [Criteria]
// Input: A unsorted array of integers
// Output: A sorted array using quick sorting

// Quick Sort -
// Finding the index where the pivot (partition) should end up in the sorted array
// Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting



// The pivot is selected as the last element
const pivot1 = (arr) => {
    let pivot = arr[arr.length - 1];
    let index = -1;  // Index of smaller element

    for(let i = 0; i < arr.length - 1; i++){
        if(pivot > arr[i]){
            index++;
            [arr[index], arr[i]] = [arr[i], arr[index]];
        }
    }
    [arr[arr.length - 1], arr[index + 1]] = [arr[index + 1], arr[arr.length - 1]];

    return index + 1;
}

console.log(pivot1([5,2,1,8,4,7,6,3]));  // 2

const quickSort1 = (arr) => {
    if(0 < arr.length - 1){
        let pivot = pivot1(arr);
        let left = arr.slice(0, pivot);
        let right = arr.slice(pivot);

        const leftArr = quickSort1(left);
        const rightArr = quickSort1(right);
        arr = [...leftArr, ...rightArr];
    }
    return arr;
}

console.log(quickSort1([5,2,1,8,4,7,6,3]));  // [1,2,3,4,5,6,7,8]


// The pivot is selected as the first element
const pivot2 = (arr, low = 0, high = arr.length -1) => {
    let pivot = arr[low];
    let index = low;

    for(let i = low + 1; i <= high; i++){
        if(pivot > arr[i]){
            index++;
            [arr[index], arr[i]] = [arr[i], arr[index]]; 
        }
    }
    [arr[low], arr[index]] = [arr[index], arr[low]];

    return index;
}

console.log(pivot2([10,80,30,90,40,20,50,70]));  // 5; [10,20,30,40,50,70,80,90]
console.log(pivot2([6,6,7,7,7,4,3,5]));  // 2; [10,20,30,40,50,70,80,90]

const quickSort2 = (arr, low = 0, high = arr.length - 1) => {
    if(low < high){
        let pivot = pivot2(arr, low, high); 
        quickSort2(arr, low, pivot - 1);
        quickSort2(arr, pivot + 1, high);
    }
    return arr;
}

console.log(quickSort2([5,2,1,8,4,7,6,3]));            // [1,2,3,4,5,6,7,8]
console.log(quickSort2([4,6,9,1,2,5,3]));              // [1,2,3,4,5,6,9]
console.log(quickSort2([100,-3,2,4,6,9,1,2,5,3,23]));  // [ -3, 1, 2, 2, 3, 4, 5, 6, 9, 23, 100 ]