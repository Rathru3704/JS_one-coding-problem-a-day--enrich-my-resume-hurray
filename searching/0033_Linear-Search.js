// [Criteria]
// Input: A sorted/unsorted array of integers and a number
// Output: If the current array element is equeal to the number, return the index at which the element is found
//         If the number is never found, return -1



// O(n) solution
const linearSearch = (arr, num) => {
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] === num) return i;
    }
    return -1;

    // let val = -1;
    // arr.forEach(function(ele, index){
    //     if(ele === num) val = index
    // });
    // if(val !== -1) return val
    // else return -1;
}

console.log(linearSearch([34,56,1,2], 1));
console.log(linearSearch([34,3,1,2], 8));

