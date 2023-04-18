// Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// array of whole integers, no letters, or other values, numbers are ascending in value
// remove duplicates, keep in order, return the length of the array, do not create new array

// create a hash map
// create an object
// loop through all the values in the array
// if the value is not already there add the value to the object starting from 1
// return the object length

function removeDuplicates(arr) {
  let obj = []

  for (let num of arr) {
    if (Object.hasOwn(obj, num)) {
      continue
    } else {
      obj[num] = num
    }
  }
  return obj
}

function removeDuplicates(nums) {
  return Array.from(new Set(nums))
}

//loop the array
// if the next value is same as previous remove it
// return array

function removeDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] === nums[i]) {
      nums.splice(i + 1, 1)
      i--
    }
  }
  return nums
}

console.log(removeDuplicates([1, 1, 2]), 2)
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 3, 3, 3, 4]), 5)
console.log(removeDuplicates([0, 1, 2, 3, 4, 5]), 6)
