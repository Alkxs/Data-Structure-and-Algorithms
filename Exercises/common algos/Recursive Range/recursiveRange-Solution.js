// Instructions 

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

// Solution

//1. with recursion
function recursiveRange(num) {
  if (num === 0) return 0
  return num + recursiveRange(num - 1)
}

//2. without recursion, iterative
function recursiveRange(num){
  let result = 0

  for(let i = 0; i <= num; i++) {
    result += i
  }

  return result
}

//4. with trick - Gauss formula
function sumRange(num) {
  return (num * (num + 1)) / 2
}


// Tests
console.log(recursiveRange(2)) // 3 
console.log(recursiveRange(4)) // 10
console.log(recursiveRange(6)) // 21

// Notes
//number, positive, integer,no empty
//number

// examples:
//1 recursiveRange(2) // 0+1+2 // 3
//2 recursiveRange(4) // 0+1+2+3+4 // 10
//3 recursiveRange(6) // 0+1+2+3+4+5+6 // 21

//pseudocode:

//Recursion
// Base case - if num < 0 return 1
// return num + recursiveRange(num -1)


// Big-O = 
