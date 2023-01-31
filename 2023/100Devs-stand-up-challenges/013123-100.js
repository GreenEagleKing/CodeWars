// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// array of integers, never empty, 
// return the avg integer/number

function getAverage(arr) {
    // find the length of the array 
    // divide the length by 2 and round down if not integer
    // return the value at that index

    const avgIndex = Math.floor(arr.length / 2)
    return arr[avgIndex]
}

console.log(getAverage([2,2,2,2])) //,2)
console.log(getAverage([1,2,3,4,5,])) //,3);
console.log(getAverage([1,1,1,1,1,1,1,2])) //,1)

// Better solution

function getAverage(arr) {
    return Math.floor(arr.reduce((acc, c) => (acc += c),0) / arr.length)
}

console.log(getAverage([2,2,2,2])) //,2)
console.log(getAverage([1,2,3,4,5,])) //,3);
console.log(getAverage([1,1,1,1,1,1,1,2])) //,1)