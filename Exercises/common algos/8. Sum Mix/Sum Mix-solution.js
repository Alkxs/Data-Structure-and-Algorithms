// with Reduce

function sumMix(array) {
  return array.reduce((sum, value) => sum + Number(value), 0)
}

// Using a For loop

function sumMix(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += Number(array[i])
  }
  return sum
}
