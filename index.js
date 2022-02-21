/* This function checks to see if the word contains majority vowels or not */

const checkVowels = word => {

    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    let reqVowels = word.length / 2
    let wordSplit = word.toLowerCase().split('')
  
    for (let i = 0; i < wordSplit.length; i++) {
      let letter = wordSplit[i]
  
      if (vowels.includes(letter)) {
        count++
      }
  
      if (count > reqVowels) {
        return true
      }
    }
  
    return false
  }
  
  console.log(checkVowels(/*Add word here*/))