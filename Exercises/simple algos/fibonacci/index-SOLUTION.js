// AN ITERATIVE APPROACH
function fibonacci(n) {
  let fibSequence = [0, 1]

  for (let i = 2; i <= n; i++) {
    fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2]
  }

  return fibSequence[n]
}
// Alternative iterative approach (a bit more perfomant)

function fibonacci(n) {
  if (n < 2) {
    return n
  }

  let twoBack = 0
  let oneBack = 1
  let current

  for (let i = 2; i <= n; i++) {
    current = twoBack + oneBack
    twoBack = oneBack
    oneBack = current
  }

  return current
}

// A RECURSIVE SOLUTION

function fibonacci(n) {
  if (n <= 1) {
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

// USING MEMOIZATION

function fibonacci(n, memo) {
  memo = memo || {}

  if (memo[n]) {
    return memo[n]
  }
  if (n <= 1) {
    return 1
  }

  return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo))
}
