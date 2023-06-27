// Instructions 

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// Solution
//1. without recursion
function productOfArray(arr) {
  // result = 1
  let result = 1
  // loop through arr
  for(let i = 0; i < arr.length; i++) {
  // multiply each num
    result *= arr[i]
  // update result
  }
  return result
}

//2. With Recursion
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1
  }
  return arr[0] * productOfArray(arr.slice(1))
}

//3. With Built-in methods
function productOfArray(arr) {
  return arr.reduce((a, b) => a * b, 1)
}



// Tests
console.log(productOfArray([1, 2, 3, 4])) // 24
console.log(productOfArray([2, 6, 1])) // 12
console.log(productOfArray([10, 2, 10])) // 200

// Notes
// array of numbers, no negative, no floating
// return Number

// examples:
//1 [1, 2, 3, 4] // 24 
//2 [2, 6, 1] / // 12
//3 [10, 2, 10] // 200

//pseudocode:
  // result = 1
  // loop through arr
  // multiply each num
  // update result

// Big-O = O(n)
