// 3/5 Array Challenge REDO

// 7 kyu Don't give me five

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it.

// numbers, pos/neg, start num always smaller then end num, whole numbers?, start and end are inclusive, result can contain 5, no funny buisness?
// return total of all numbers that do not have a value of 5

// create new array
// populate array with numbers from start to end
// 

function dontGiveMeFive(start, end) {
    let newArr = []
    for(let i = start; i <= end; i++) {
        if (!i.toString().includes('5')) {
            newArr.push(i)
        }
    }
    return newArr.length
}

console.log(dontGiveMeFive(1,9)) // 1,2,3,4,6,7,8,9 = 8
console.log(dontGiveMeFive(4, 16)) // 4,6,7,8,9,10,11,12,13,14,16 = 11