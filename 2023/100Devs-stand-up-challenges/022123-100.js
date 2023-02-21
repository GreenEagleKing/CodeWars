// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

// If the average length is not an integer, use Math.round().
// The input array's length > 1

// array of strings, only string, no funny buis, at least 1 array item
// new array with each string now length of average from original array, round up if not integer

// add up length of arrays
// use reduce on orginal array add up all string lengths and divide by number of array items
// map new array
// each array - first letter repeated by avg number
// return array

function averageLength(arr) {
    const avg = Math.round(arr.reduce((acc, c) => acc + c, "").length / arr.length)
    return arr.map(str => str.slice(0,1).repeat(avg))
}

console.log(averageLength(['u', 'y']), ['u', 'y'])
console.log(averageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc'])
console.log(averageLength(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee'])


// Optimum code
function averageLength(arr) {
    const avg = Math.round(arr.reduce((acc, c) => acc + c.length, 0) / arr.length)
    return arr.map(str => str[0].repeat(avg))
}

console.log(averageLength(['u', 'y']), ['u', 'y'])
console.log(averageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc'])
console.log(averageLength(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee'])