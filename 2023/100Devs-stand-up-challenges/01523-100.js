// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// array of integers, always majority number, numbers only
// number in the array that appears the most, integer only

const majorityNum = (num) => {
    let countObj = {}
    for (let n of num) {
        if(Object.hasOwn(countObj, n)) {
            countObj[n] += 1
        } else {
            countObj[n] = 1
        }
    }
    return Object.keys(countObj).sort((a,b) => countObj[b] - countObj[a])[0]
}


console.log(majorityNum([3,2,3]), 3)
console.log(majorityNum([2,2,1,1,1,2,2]), 2)