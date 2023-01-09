// 6 kyu Highest Scoring Word

// Given a string of words, you need to find the highest scoring word.

// string of letters only, lowercase only
// return the higher scoring string as a string

// make an array with the alphabet
// split the string into words
// for each word split and loop through it 

function high(x){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let words = x.split(" ")
    let wordCountArr = []
    
    let loopWords = words.forEach((wordEl) => {
        return wordCountArr.push(wordEl.split("").map((element, index) => {
            let numbers = alphabet.indexOf(element) + 1
            return numbers
        }))
    })
    let wordCountArrRed = wordCountArr.map((element) => {
        return element.reduce((acc, c) => acc + c, 0)
    })
    let position = wordCountArrRed.indexOf(Math.max(...wordCountArrRed))
    return words[position]

}

console.log(high("abad ab")) // "abad" = 8 , "ab" = 3