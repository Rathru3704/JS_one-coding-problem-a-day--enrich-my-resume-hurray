// [Criteria]
// Input: A unsorted array of integers
// Output: A sorted array using insertion sorting which builds up the sort by gradually creating a larger left half which is always sorted



const insertionSort1 = (arr) => {
    for(let i = 1; i < arr.length; i++){
        for(let j = i - 1; j >= 0; j--){
            // console.log(arr, arr[j], arr[i], j, i)
            if(arr[i] < arr[j]){
                [arr[j], arr[i]] = [arr[i], arr[j]];
                i = j;
            }
        }
    }
    return arr;
}
console.log(insertionSort1([0,2,34,22,10,19,17]));  // [ 0, 2, 10, 17, 19, 22, 34 ]


const insertionSort2 = (arr) => {
    for(let i = 1; i < arr.length; i++){
        let curValue = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > curValue; j--){
            arr[j+1] = arr[j];
            console.log(arr, curValue, arr[j]);
        }
        arr[j+1] = curValue;
    }
    return arr;
}
console.log(insertionSort2([0,2,34,22,10,19,17]));