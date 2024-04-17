let randomStarterLetters = "aababababa"
let letterIndexWeNeedToFind = 20

const s = randomStarterLetters
const n = letterIndexWeNeedToFind

function repeatedString(s, n) {
  // put s into an array
  // check if s is longer than n
  // if s is not longer, add another copy of s to the end
  // if s is longer than n, crop the arry to be n long (crop at n-1)
  // return letter at that index
  /*let croppedArray = []
  let onlyAsAllowed = []
  let starterLettersArray = s.split('')

  for (let i=0; i<starterLettersArray.length; i++) {

      if (starterLettersArray.length < n) {
        starterLettersArray.push(...s.split(''))
        }

  }

  croppedArray = starterLettersArray.slice(0, n)
 // console.log(croppedArray)
  onlyAsAllowed = croppedArray.filter(x => x === 'a')
  let result = onlyAsAllowed.length 
    return result */

    // 2nd go
    // figure out how many times we need to repeat the string, and calculat the remainder string
    // count up the as in the string, and the remainder string, then return the answer

    const numberOfTimesToRepeatTheString = Math.floor(n / s.length)
    const remainderString = s.slice(0, n % s.length)
    const asInOneString = s.split('').filter(x => x === 'a').length

    let result = numberOfTimesToRepeatTheString * asInOneString + remainderString.split('').filter(x => x === 'a').length
 


    return result
  
}

console.log(repeatedString(s, n))