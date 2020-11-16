const fibonacci_recursion = (num) => {
    if(num <= 2) return 1;
    return fibonacci_recursion(num - 1) + fibonacci_recursion(num - 2);
}

console.log(fibonacci_recursion(5));
console.log(fibonacci_recursion(6));
console.log(fibonacci_recursion(2));
console.log(fibonacci_recursion(1));


// Dynamic Programming using Memorization (Top-down)
const fibonacci_recursion2 = (num, memo=[]) => {
    // let memo = [];
    if(memo[num] !== undefined) return memo[num];
    if(num <= 2) return 1;
    let res = fibonacci_recursion2(num - 1, memo) + fibonacci_recursion2(num - 2, memo);
    memo[num] = res;
    return res;
}

console.log(fibonacci_recursion2(5));
console.log(fibonacci_recursion2(6));
console.log(fibonacci_recursion2(2));
console.log(fibonacci_recursion2(1));


// Dynamic Programming using Tabulation (Bottom-up)
const fibonacci_iteration1 = (num) => {
    let arr = [0, 1];
    for(let i = 2; i < num + 1; i++){
        arr.push(arr[i-2] + arr[i-1])
    }
    return arr[num];
}

console.log(fibonacci_iteration1(5));
console.log(fibonacci_iteration1(6));
console.log(fibonacci_iteration1(2));
console.log(fibonacci_iteration1(1));


const fibonacci_iteration2 = (num) => {
    let a = 1, b = 0, temp;
    while(num > 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;
}

console.log(fibonacci_iteration2(5));
console.log(fibonacci_iteration2(6));
console.log(fibonacci_iteration2(2));
console.log(fibonacci_iteration2(1));