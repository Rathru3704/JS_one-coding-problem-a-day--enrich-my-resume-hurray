// [Criteria]
// Input: A unsorted array of integers
// Output: A sorted array using merge sorting

// Merge Sort -
// Split up => Sorting => Merging



const merge = (arr1, arr2) => {
    let mergeArr = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]) {
            mergeArr.push(arr1[i]);
            i++;
        }
        else {
            mergeArr.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        mergeArr.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        mergeArr.push(arr2[j]);
        j++;
    }

    return mergeArr;
}

console.log(merge([1,10,50], [2,14,99,100]));


const mergeSort = (arr) => {
    // Split up
    if(arr.length <= 1) return arr;

    let middle = Math.floor(arr.length / 2);
    let rightArr = mergeSort(arr.slice(middle));
    let leftArr = mergeSort(arr.slice(0, middle));

    // Sorting & Merging
    return merge(leftArr, rightArr);  // Noice!
}

console.log(mergeSort([10,24,76,73,70,1,9]));





