// 1/5 Array

// 6 kyu Array.diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

//It should remove all values from list a, which are present in list b keeping their order.

// 2 arguements, arrays, only numbers, positive+ neg, whole, can it be null / empty array?, keeping order, will array b always have the numbers in array a?
// remove all the numbers from array a that are in array b, return array numbers



function arrayDiff(a, b) {
    // lets filter the A array based on B array values
    return a.filter(element => {
        // if b does not includes() element return filter A array
        if(!b.includes(element)) {
            return true
        }
    })
}

console.log(arrayDiff([1,2,3,0],[1,2])) // [3]
console.log(arrayDiff([1,2,2,3,4], [1,3,])) // [2,2,4]