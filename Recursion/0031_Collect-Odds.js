// Iteration
const collectOdds1 = (arr) => {
    let coll = [];
    arr.map(ele => {
        if(ele % 2 === 1) coll.push(ele);
    })
    return coll;
}
console.log(collectOdds1([1,2,3,4,5,6]));


// *** Helper Method Recursion ***
const collectOdds2 = (arr) => {
    let coll = [];

    const helper = (inputArr) => {
        if(inputArr.length === 0) return;
        if(inputArr[0] % 2 !== 0) coll.push(inputArr[0]);
        helper(inputArr.slice(1));
    }
    helper(arr);

    return coll;    
}
console.log(collectOdds2([1,2,3,4,5,6]));


// Pure Recursion
const collectOdds3 = (arr) => {
    let coll = [];

    if(arr.length === 0) return coll;
    if(arr[0] % 2 !== 0) coll.push(arr[0]);
    coll = coll.concat(collectOdds3(arr.slice(1)));
    return coll;
}
console.log(collectOdds3([1,2,3,4,5,6]));