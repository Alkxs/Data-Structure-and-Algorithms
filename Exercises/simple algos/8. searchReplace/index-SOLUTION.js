// WITH Replace

function searchReplace(sentence, word, otherWord) {
  let newSentence = sentence

  if (sentence.includes(word)) {
    newSentence = sentence.replace(word, otherWord)
  }
  return newSentence
}

// WITH FOR LOOP

function searchReplace(sentence, word, otherWord) {
  let words = sentence.split(' ')
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === word.toLowerCase()) {
      words[i] = otherWord
    }
  }
  return words.join(' ')
}

// WITH REGEX

function searchReplace(sentence, word, otherWord) {
  let regex = new RegExp('\\b' + word + '\\b', 'gi')
  return sentence.replace(regex, otherWord)
}
