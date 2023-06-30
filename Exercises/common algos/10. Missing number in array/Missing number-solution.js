// Sum of natural numbers

function findMissingNumber(array) {
  const n = array.length + 1
  const expectedSum = (n * (n + 1)) / 2
  const actualSum = array.reduce((a, b) => a + b, 0)
  return expectedSum - actualSum
}

// With Sorting

function findMissingNumber(array) {
  array.sort((a, b) => a - b)
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== i + 1) {
      return i + 1
    }
  }
  return array.length + 1
}

// with Xor

function findMissingNumber(array) {
  const n = array.length + 1
  let xor1 = 1
  for (let i = 2; i <= n; i++) {
    xor1 = xor1 ^ i
  }
  let xor2 = array[0]
  for (let i = 1; i < n - 1; i++) {
    xor2 = xor2 ^ array[i]
  }
  return xor1 ^ xor2
}
