//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//Return your answer as a number.

// array of numbers both string and numbers, integers, non neg, no funny busissness
// return the sum of the values in the array

    // convert all the array values to numbers using map()
    //use reduce to sum all numbers from the map array and return the sum as a number

function sumMix(n) {
    const numberArray = n.map(num => Number(num))
    return numberArray.reduce((acc, c) => acc + c)
}

console.log(sumMix([9, 3, '7', '3'])) //, 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))//, 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))//, 41); 