// Iteration
const power = (base, exponent) => {
    let x = base;
    for(let i = 1; i < exponent; i++){
        base *= x;
    }
    return base;
}

console.log(power(2, 10));
console.log(power(5, 3));


// Recursion
const power1 = (base, exponent) => {
    if(exponent === 1) return base;
    return base *= power1(base, exponent - 1);
}

console.log(power1(2, 10));
console.log(power1(5, 3));


const endless2020 = () => {
    let vaccines = 1;
    let cases = 38293;

    const x = () => {
        vaccines - cases > 0 ? console.log('the end') : vaccines++;
    }
    x();
    
    return cases *= endless2020();
}

endless2020();