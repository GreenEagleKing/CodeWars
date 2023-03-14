// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// array of numbers/integers, pos only, always numbers in array
// return boolean - true if any value appears at least once else false

// create a set from the array
// then compare the set to the orginal array
// if they are the same we know that every element is distinct aka false
// else must be true

const hasDuplicates = (arr) => {
    let arrSet = new Set(arr)
    return arrSet.size === arr.length ? false : true
}

console.log(hasDuplicates([1,2,3,1]), true)
console.log(hasDuplicates([1,2,3,4]), false)
console.log(hasDuplicates([1,1,1,3,3,4,3,2,4,2]), true)


// Quicker solution using a hash map

function objectSolution(nums) {
    //create object variable
    let testObj = {};
    // loop through every number in the array
    for (var i = 0; i < nums.length; i++) {
        // if the current value is already in the object (value already true) return true
      if (testObj[nums[i]]) {
        return true;
        // if the current value is not then add to object and add true value
      } else {
        testObj[nums[i]] = true;
      }
    }
    console.log(testObj)
    // if any of the results are not true return false
    return false;
}

console.log(objectSolution([1,2,3,1]), true)
console.log(objectSolution([1,2,3,4]), false)
console.log(objectSolution([1,1,1,3,3,4,3,2,4,2]), true)