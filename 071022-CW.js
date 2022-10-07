// More string practice

// 6 kyu Create Phone Number

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// P - array of integers
// R - first 3 numbers in brackets, then space, 3 numbers then insert -
// E
// P

function createPhoneNumber(numbers){
    numbers.unshift("(")
    let brackets = numbers.splice(4,0, ")"," ")
    let hyphen = numbers.splice(9,0,"-")
    return numbers.join("")
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// Works, but not very sexy

// see below for sexy version

function createPhoneNumber(numbers) {
    let format = '(xxx) xxx-xxxx'
    for(let i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i])
    }
    return format
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) 