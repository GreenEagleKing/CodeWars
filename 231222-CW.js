// 6 kyu Unique In Order

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// string, numbers, chars, caps or no caps or ARRAY
// return array with no dups next to each other

// if it is not an array then split it
// FILTER!!!!! new array
// add element to array, if next element is same as current element then ignore
// return array

var uniqueInOrder=function(iterable){
    let arr = []
    if(!Array.isArray(iterable)) {
        arr = iterable.split("")
    } else {
        arr = iterable
    }
    let removeDups = arr.filter((element, index, array) => {
        if(array[index+1] !== element) {
            return element
        }
    })
    return removeDups
  }

console.log(uniqueInOrder([1,2,2,3,3])) // [1,2,3]
console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']

var uniqueInOrder=function(iterable){
    let arr = []
    !Array.isArray(iterable) ? arr = iterable.split("") : arr = iterable
    return arr.filter((element, index, array) => array[index+1] !== element)
  }

  console.log(uniqueInOrder([1,2,2,3,3])) // [1,2,3]
console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']