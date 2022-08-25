// 8 kyu Plural

// We need a simple function that determines if a plural is needed or not.

// P - positive integer, float or zero
// R - true for plural, false if not
// E
// P - 

// if 1 return false else true

function plural(n) {
    return n === 1 ? false : true
  }

  plural(0)// true
  plural(1) // false

// 7 kyu Binary Addition

// Implement a function that adds two numbers together and returns their sum in binary.

// P - number, positive, integer
// R - string binary
// E
// P

// use parseInt with a base of 10 for binary

function addBinary(a,b) {
    return parseInt(a+b, 10).toString(2)
}

addBinary(1,1) // "10"
addBinary(5,9) // "1110"