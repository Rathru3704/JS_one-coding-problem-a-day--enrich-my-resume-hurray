const stringSearch = (str, target) => {
    let count = 0;

    // Look over str
    for(let i = 0; i < str.length; i++){
        // Look over target
        for(let j = 0; j < target.length; j++){
            // If the characters don't match, break out of the inner loop
            if(target[j] !== str[i+j]) break;

            // If the characters do match, keep going
            // If complete the inner loop and find a match, increase the counter
            if(j === target.length - 1) count++; 
        }
    }
    return count;
}

console.log(stringSearch('wowomgzomg', 'omg'));
console.log(stringSearch('lorie loled', 'lol'));