//   Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// array of integers only
// boolean

// loop through the array
// if the the index of i === last index of i
// carry on
// if index of i !== last index of i
// return true
// else false

//brute force
function containsDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
      return true
    }
  }
  return false
}

console.log(containsDuplicates([2, 14, 18, 22, 22]), true)
console.log(containsDuplicates([1, 2, 3, 1]), true)
console.log(containsDuplicates([1, 2, 3, 4]), false)
console.log(containsDuplicates([1, 1, 1, 2, 4, 5, 5, 6, 2, 1]), true)

// hash map
function containsDuplicates(nums) {
  let obj = {}

  for (let n of nums) {
    if (Object.hasOwn(obj, n)) {
      return true
    } else {
      obj[n] = true
    }
  }
  return false
}

console.log(containsDuplicates([2, 14, 18, 22, 22]), true)
console.log(containsDuplicates([1, 2, 3, 1]), true)
console.log(containsDuplicates([1, 2, 3, 4]), false)
console.log(containsDuplicates([1, 1, 1, 2, 4, 5, 5, 6, 2, 1]), true)
