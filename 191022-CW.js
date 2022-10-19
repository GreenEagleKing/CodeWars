// 7 kyu Small enough? - Beginner

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

//You can assume all values in the array are numbers.

// array and number, positive, just numbers?, will they be in order?
// all numbers in the array are <= to the limit number, return true/false

function smallEnough(a, limit){
    // use every() - method tests whether all elements in the array pass the test - returns boolean
    return a.every(num => num <= limit)
}

console.log(smallEnough([1,2,3,4,5], 5)) // True
console.log(smallEnough([5,10,32], 8)) // False