// Instructions 

// Write a function called reverse which accepts a string and returns a new string in reverse.

// Solution

//1. with built-in methods
function reverse(str) {
  return str.split('').reverse().join('')
}

//2. with recursion
function reverse(str) {
  if (str.length <= 1) {
    return str
  } else {
    return reverse(str.substr(1)) + str.charAt(0)
  }
}

//3 with iteration
function reverse(str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}

// Tests
console.log(reverse('awesome')) // emosewa
console.log(reverse('beautiful')) // lufituaeb
console.log(reverse('alright')) // thgirla

// Notes

// examples:
//1 'awesome' // emosewa
//2 'beautiful' // lufituaeb
//3  'alright' // thgirla



// Big-O = 
//1 = O(n)
//2 = O(nˆ2)
//3 = O(n)
