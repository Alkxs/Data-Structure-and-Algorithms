// USING A FOR LOOP

function longestWord(text) {
  let arr = text.split(' ')
  let longest = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i]
    }
  }
  return longest
}

// USING .REDUCE()

function longestWord(text) {
  return text.split(' ').reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest
  })
}

// USING .SORT()

function longestWord(text) {
  var sortedArray = text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)

  return sortedArray[0]
}
