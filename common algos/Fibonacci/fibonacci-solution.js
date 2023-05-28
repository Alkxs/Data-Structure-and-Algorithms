// Instructions 

// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// Solution
// with recursion
function fib(n) {
  //base case
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

// with iteration
function fibonacci(n) {
  let a = 0;
  let b = 1;
  let temp;

  while (n >= 0){
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
}


// Tests
console.log(fib(4)) // 3
console.log(fib(10))  // 55
console.log(fib(28)) // 317811

// Notes
// num, positive, no floating number, integer
// number

// examples:
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465



// Big-O = recursive = O(2ˆn)
// Big-O = iterative = O(n)
