// 8 kyu Is it even?

//P - number, postive/neg, integer/float
//R - even = true, odd = false
//E
//P 

 // if n remainder 2 is 0 then must be even
    //else must be false



function testEven(n) {
   return n % 2 === 0 ? true : false
}


testEven(12) // true
testEven(3) // false
testEven(5.7) // false

// 6 kyu Count characters in your string

// P - string
// R - string + number of occurences in the string, if empty return empty literal {}
// E - "aba" = 'a':2, 'b':1
// P


// Split the string into single characters
// For each character search the string for the same character
// For every occurence of that character add a count to that character
// Return character and count for each character in the string

function count (string) {  
    const strSplit = string.split("").reduce((acc, letter) => {
        acc[letter] ? acc[letter]++ : acc[letter] = 1
        return acc
    }, {})
    return strSplit
  }

count("aba")