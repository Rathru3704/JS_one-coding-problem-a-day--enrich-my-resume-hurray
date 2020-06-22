const removeDuplicatesFromUnsortedArray0 = (arr) => {
    const includeMethod = (array, dupe) => {
        for (let j = 0; j < array.length; j++) {
            if (array[j] === dupe) return true;
        }
        return false;
    }
        
    let uniArr = [];
    for(let i = 0; i < arr.length; i++){
        if(!includeMethod(uniArr, arr[i])){
            uniArr.push(arr[i]);
        }
    }
    return uniArr;
}

console.log(removeDuplicatesFromUnsortedArray0([1, 3, 2, 2, 3, 2, 6, 5, 5]));  // [ 1, 3, 2, 6, 5 ]




// Using includes() to check if uniArr contains the element from arr or not
const removeDuplicatesFromUnsortedArray1 = (arr) => {
    let uniArr = [];
    uniArr.push(arr[0]);
    for(let i = 1; i < arr.length; i++){
        if(!uniArr.includes(arr[i])){
            uniArr.push(arr[i]);
        }
    }
    return uniArr;
}

console.log(removeDuplicatesFromUnsortedArray1([1, 3, 2, 2, 3, 2, 6, 5, 5]));  // [ 1, 3, 2, 6, 5 ]




// I also remembered there is a solution without creating a new array
const removeDuplicatesFromUnsortedArray2 = (arr) => {
    let arrSort = arr.sort();                                                 // Sort arr first, and then compare the element with the adjacent one
    for(let i = 0; i < arrSort.length; i++){
        if(arrSort[i] === arrSort[i + 1]){
            arrSort.splice(i, 1);                                             // Splice() will remove the elements which are not unique from arr
            i--;
        }
    }
    return arrSort;
}

console.log(removeDuplicatesFromUnsortedArray2([1, 3, 2, 2, 3, 2, 6, 5, 5]));  // [ 1, 2, 3, 5, 6 ]
