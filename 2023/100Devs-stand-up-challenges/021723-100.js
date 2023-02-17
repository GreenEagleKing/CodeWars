//You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

//The input to the function will be an array of three distinct numbers.

//For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

//Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// 3 distinct numbers in an array
// the index of the middle value

// sort the array from low to high
// find the middle value from the sorted array and find it in the orignal array and return the index

function gimme(arr) {
    const sortedArr = [...arr].sort((a,b) => a - b)
    return arr.indexOf(sortedArr[1])
}

console.log(gimme([2,3,1]), 0)
console.log(gimme([5,10,14]), 1)
console.log(gimme([12,2,10]), 2)