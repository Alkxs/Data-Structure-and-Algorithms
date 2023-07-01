// Recursive

function flattenArray(arr) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]))
    } else {
      result.push(arr[i])
    }
  }

  return result
}

// flat method

function flattenArray(arr) {
  return arr.flat(Infinity)
}

// stack (non-recursive)

function flattenArray(arr) {
  let stack = [...arr]
  let res = []
  while (stack.length) {
    // pop value from stack
    let next = stack.pop()
    if (Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next)
    } else {
      res.push(next)
    }
  }
  // reverse to restore input order
  return res.reverse()
}
