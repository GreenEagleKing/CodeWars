// 6 kyu Replace With Alphabet Position

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// P - string
// R - string, replace each letter with position in alphabet, e.g a = 1, b = 2
// E
// P

// create an array with all the letters in the alphabet
// split the string into letters
// for each letter search the alphabet array for a match
// Once match is found add the index position to a new array
// join the array values into a single string

function alphabetPosition(text) {
    const alphabet = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const newArr = []
    let splitStr = text.toLowerCase().replace(/[^a-z]/gi, '').split("")
    splitStr.map((element) => {
        newArr.push(alphabet.indexOf(element))
    })
   return newArr.join(" ")
  }

alphabetPosition("The sunset sets at twelve o' clock.") // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"