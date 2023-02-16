//Implement a difference function, which subtracts one list from another and returns the result.

//It should remove all values from list a, which are present in list b keeping their order.

//arrayDiff([1,2],[1]) == [2]
//If a value is present in b, all of its occurrences must be removed from the other:


// 2 arrays of integers only,
// return an array with all occurences of list b removed from list a

//take array A and filter it
// if the value is included in array B then remove it

function arrayDiff(a, b) {
    return a.filter(num => {
        return !b.includes(num)
    })
}


console.log(arrayDiff([1,2,2,2,3],[2])) == [1,3]

console.log(arrayDiff([], [4,5])), [], "a was [], b was [4,5]"

console.log(arrayDiff([3,4], [3])), [4], "a was [3,4], b was [3]"

console.log(arrayDiff([1,8,2], [])), [1,8,2], "a was [1,8,2], b was []"