// Instructions

//Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.


// Solution

// .1 with recursion

function power(base, exponent) {
  if (exponent === 0) return 1
  return base * power(base, exponent - 1)
}

// .2 without recursion

function power(base, exponent) {
  let result = 1
  for (let i = 0; i < exponent; i++) {
    result *= base
  }
  return result
}

//tests

console.log(power(2, 0)) // 1
console.log(power(2, 2)) // 4
console.log(power(2, 4)) // 16


// Notes

//numbers, integer, no empty input, positive numbers
// return number 

// Examples
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// Solve with recursion
// base case
// return solution

// Big0 = O(n)