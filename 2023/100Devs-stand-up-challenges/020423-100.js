//Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

//For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

//Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// multiple arrays within an array, containing integers only
// integer of the number of unique arrays from picking one element from each sub array

// remove any duplicates from the arrays
// multiply the length of first array by second array
// multiply result of by the last array
// return the total

function solve(arr) {
    const noDups = arr.map(num => new Set(num))
    console.log(noDups)
    return noDups.reduce((acc, set) => {
        return set.size *= acc
    }, 1)
}

console.log(solve([[1,2,2],[4,4],[5,6,6]])) //,4)

console.log(solve([[1,2],[4],[5,6]])) //,4)
console.log(solve([[1,2],[4],[5,6],[8,9]])) //,8)
console.log(solve([[1,2,2],[4,4],[5,6,6]])) //,4)
console.log(solve([[1,2],[3,4],[5,6]])) //,8)
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]])) //,72)