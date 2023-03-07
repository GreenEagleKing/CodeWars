// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

// string of characters only
// reverse the order of the characters and return the string

// brute for only no reverse method
// split the string into array
// create new array
// unshift each character to the front
// join new array 
// return string

const reverseString = (str) => {
    const revStr = []
    str.split('')
    for (let char of str) {
        revStr.unshift(char)
    }
    return revStr.join("")

}


console.log(reverseString('hello'), 'olleh')
console.log(reverseString('I Love Tignes'), 'sengiT evoL I')