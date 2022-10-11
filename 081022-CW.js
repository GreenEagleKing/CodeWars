// Redo all string challenges from 1 - 5

// 1 / 5 String CW challenges

// 7 kyu Complementary DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// P - strings, "A, T, C, G"
// R - A becomes T and C becomes G and visa versa
// E
// P

// split the string into array
// map new array, if A replace with C, if C replace with G

function DNAStrand(dna){
    return dna.split("").map(element => {
        if (element === 'A') {
            return element = 'T'
        } else if (element === 'C') {
            return element = 'G'
        }
        else if (element === 'T') {
            return element = 'A'
        }
        else if (element === 'G') {
            return element = 'C'
        }
    }).join("")
}

DNAStrand("ATTGC") // "TAACG"

// cleaner way of doing it

function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }

// 2 / 5 String Challenge

// 7 kyu Credit Card Mask

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// P - string
// R - return string with all # characters accept last 4 digits
// E
// P

// replace all characters with # accept last 4


function maskify(cc) {
    let str = cc.split("").reverse()
    return str.map((element, i) => {
        if (i > 3) {
            return element = '#'
        } else {
            return element
        }
    }).reverse().join("")
}   

maskify("4556364607935616") //  "############5616"

// clean result

function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }

// 3 / 5 String Challenge

// 8 kyu Reversed Words

// Complete the solution so that it reverses all of the words within the string passed in.

// P -
// R -
// E
// P


function reverseWords(str){
    return str.split("").reverse().join("")
}

reverseWords('Hello')

// 4 / 5 String Challenge

// 6 kyu Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed

// P - string
// R - if the word has more than 5 letters reverse the word, if not leave it
// P

// split the string into seperate words
// map new array
// each element put into new array, but if the string length has more than 5 characters then reverse the word

function spinWords(string){
    const strSplit = string.split(" ")
    return strSplit.map(element => {
        if(element.length > 4) {
            return element.split("").reverse().join("")
        } else {
            return element
        }
    }).join(" ")
}

spinWords("Hello Mr Gatwick")


// 5 / 5 String Challenge

// 6 kyu Who likes it?

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// P - array of strings
// R - see above
// E - 
// P

// case statement
// if the array length is 1 then do this...

function likes(names) {
    if (names.length === 0) {
        return 'no one likes this'
    } else if (names.length === 1) {
        return names[0] + ' likes this'
    } else if (names.length === 2) {
        return names[0] + 'and' + names[1] + ' like this'
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} likes this`
    }
}

likes(['Peter'])