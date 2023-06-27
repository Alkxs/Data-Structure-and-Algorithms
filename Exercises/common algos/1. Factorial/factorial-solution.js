// Instructions 

//Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

// Solution
// 1. With recursion
function factorial(num) {
  if (num === 0) return 1
  return num * factorial(num - 1)
}
// 2. without recursion
function factorial(num){
  if (num <= 1) return 1
  for (let i = num - 1; i >= 1; i--) {
    num *= i
  }
  return num
}
// 3. without recursion without modifying the input
function factorial(n) {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}


// Tests
console.log(1) // 1 
console.log(2) // 2 
console.log(4) // 24

// Notes
// integer,no floating, positive, number
// number

// examples:
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

//pseudocode:
  // Recursion
  // Base case 
  // return result


// Big-O = O(n)
