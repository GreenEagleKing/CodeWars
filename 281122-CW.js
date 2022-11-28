// 6 kyu Valid Braces

// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

//string, non-empty, only ({[]}),
// true or false

// very difficult
// This is solution

function validBraces(braces){
    let matches = { '(':')', '{':'}', '[':']'}
    let stack = []
    let currentChar

    for(let i = 0; i < braces.length; i++) {
        currentChar = braces[i]

        if (matches[currentChar]) {
            stack.push(currentChar)
        } else {
            if (currentChar !== matches[stack.pop()]) {
                return false
            }
        }
    }
    return stack.length === 0
  }

console.log(validBraces("(){[]}")) // true
console.log(validBraces("(]")) // false
console.log(validBraces("[{]}")) // false

// Explanation
function validBraces(braces){
    // create an object of the possible matches
    let matches = { '(':')', '{':'}', '[':']'}
    // create empty array
    let stack = []
    // create variable
    let currentChar

    // create loop based on string length
    for(let i = 0; i < braces.length; i++) {
        // make currentChar equal to the current char in the loop
        currentChar = braces[i]
        console.log(stack)

        // if it is an opening brace add to stack
        if (matches[currentChar]) {
            stack.push(currentChar)
            console.log(stack)
        } else {
            // else if the currentchar is not equal the last element in the stack array then return false
            if (currentChar !== matches[stack.pop()]) {
                return false
            }
        }
    }
    // 
    return stack.length === 0
  }

console.log(validBraces("(){[]}")) // true
console.log(validBraces("(]")) // false
console.log(validBraces("[{]}")) // false