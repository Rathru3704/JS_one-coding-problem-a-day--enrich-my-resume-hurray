// [Criteria]
// Input: A unsorted array of integers
// Output: A sorted array using selection sorting which is a sorting algorithm where the smallest values placed into the sorted positions



// Time Complexity - O(n^2)
const selectionSort1 = (arr) => {
    for(let i = 0; i < arr.length; i++){
        // Store the first element as the smallest value
        let min = i;
        for(let j = i + 1; j < arr.length; j++){
            // Compare min to the next item
            // If a smaller number is found, designate the smaller number to be min
            if(arr[j] < arr[min]) {
                min = j;
            }
        }

        // Swap the two values
        if(i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

console.log(selectionSort1([0,2,34,22,10,19,17]));