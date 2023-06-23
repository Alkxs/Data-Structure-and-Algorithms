// ITERATIVE APPROACH

// For loop

const vowels = ['a', 'e', 'i', 'o', 'u']

function vowelsCounter(str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count += 1
        break
      }
    }
  }
  return count
}

// For of loop

function vowelsCounter(text) {
  // Initialize counter
  let counter = 0

  // Loop through text to test if each character is a vowel
  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      counter++
    }
  }

  // Return number of vowels
  return counter
}

// REGULAR EXPRESSIONS

function vowelsCounter(text) {
  // Search text with Regex and store all matching instances
  let matchingInstances = text.match(/[aeiou]/gi)

  // Check if matching instances exist then calculate length
  if (matchingInstances) {
    // Return number of vowels
    return matchingInstances.length
  } else {
    return 0
  }
}
