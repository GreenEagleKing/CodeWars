//An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

//Example:

//The starting array sequence is [1,2,3,4,5,6,7,8,9]
//The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
//Your function should return the int 5.
//If no number was deleted from the array and no difference with it, your function should return the int 0.

//Note: N may be 1 or less (in the latter case, the first array will be []).

// 2 arrays of integer, 2nd array has one integer removed and the array is unsorted
// return the deleted value from second array, if no difference return 0

// sort the missingArr
// compare both array indivdiually, if it is the same value do nothing, if it is different return the value
// if no change then return 0

function findDeletedNumber(fullArr, missingArr) {
    let filteredArr = fullArr.filter(num => {
        return !missingArr.includes(num)
    })
    return filteredArr.length === 0 ? 0 : filteredArr[0]
}

console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')