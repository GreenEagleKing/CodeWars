// 6 kyu Find the odd int

// Given an array of integers, find the one that appears an odd number of times.

// array of integers,
// the integers that appears an odd number of times

// for each letter filter each number,
// if the number length is odd then return else continue 

// filter the array with each element
// loop through array
// 

function findOdd(A) {
  for(let i = 0; i <= A.length; i++) {
    return A.filter((el, index) => {
    })
  }
}

console.log(findOdd([1,1,2])) // 2
console.log(findOdd([0,1,0,1,0])) // 3

// Correct answer!!!
function findOdd(arr) {
  return arr.find((item) => arr.filter(el => el === item).length % 2)
}

console.log(findOdd([1,1,2])) // 2
console.log(findOdd([0,1,0,1,0])) // 0