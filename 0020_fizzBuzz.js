var fizzBuzz = function(n) {
    let fizzBuzzArr = [];
    for(let i = 1; i <= n; i++){
        if(i % 15 === 0){
            fizzBuzzArr.push("FizzBuzz");
        }
        else if(i % 3 === 0){
            fizzBuzzArr.push("Fizz");
        }
        else if(i % 5 === 0){
            fizzBuzzArr.push("Buzz");
        }
        else{
            fizzBuzzArr.push(i.toString());
        }
    }
    return fizzBuzzArr;
};

console.log(fizzBuzz(30));
/*
[ '1', 
  '2', 
  'Fizz', 
  '4', 
  'Buzz', 
  'Fizz', 
  '7', 
  '8', 
  'Fizz', 
  'Buzz', 
  '11', 
  'Fizz', 
  '13', 
  '14', 
  'FizzBuzz', 
  '16', 
  '17', 
  'Fizz', 
  '19', 
  'Buzz', 
  'Fizz', 
  '22', 
  '23', 
  'Fizz', 
  'Buzz', 
  '26', 
  'Fizz', 
  '28', 
  '29', 
  'FizzBuzz' ]
*/
/*
8 / 8 test cases passed.
Runtime: 108 ms
Memory Usage: 39.2 MB
*/