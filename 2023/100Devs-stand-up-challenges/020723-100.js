//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// string of characters, can be any type, ignore uppercase
// ( if character appears once, ) is character appears more than once, in a joined up string

// make string all lowercase
// split string into single chars
// map new array
// if char indexof === lastindex of return (
// else return )
// return new string

function stringToBrackets(str) {
    const strArray = str.toLowerCase().split("")
    return strArray.map((char, index) => {
        return strArray.indexOf(char) === strArray.lastIndexOf(char) ? "(" : ")"
    }).join("")
}

//Examples
console.log(stringToBrackets("din"    )) //  =>  "((("
console.log(stringToBrackets("recede" )) //  =>  "()()()"
console.log(stringToBrackets("Success")) //  =>  ")())())"
console.log(stringToBrackets("(( @"   )) //  =>  "))((" 