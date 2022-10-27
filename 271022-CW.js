// REDO 1/5 Arrays

//6 kyu Array.diff

//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// 2 arrays, can be empty, positive, 

// return arr A, remove all B numbers from A, 

function arrayDiff(a, b) {
  // filter Array A with if elements are not in array B
  return a.filter(element => !b.includes(element))
}

console.log(arrayDiff([1,2,4], [2])) // [1,4]
console.log(arrayDiff([1,2,3,4], [2,3])) // [1,4]